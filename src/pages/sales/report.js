import React from "react";
import Navbar from "../../components/navbar";
import DatePicker from "react-date-picker";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCol,
  MDBDatePickerV5,
  MDBRow,
  MDBBtn,
  MDBContainer,
} from "mdbreact";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'




const personnel = [
  { name: "Jeff Terry", pos: "Senior", commision: 0.1 },
  { name: "Thomas Black", pos: "Manager", commision: 0.2 },
  { name: "John Rice", pos: "Junior", commision: 0.05 },
  { name: "Larry Long", pos: "Junior", commision: 0 },
];

let data;
function compare(a ,b){
  if(a.date.getTime() < b.date.getTime()){

    return -1;
  }
  if ( a.date.getTime() > b.date.getTime() ){
    return 1;
  }
  return 0;
}


class Report extends React.Component {
 

  constructor(props) {
    super(props);
    this.state = {
      from: new Date('Jan 1 2020'),
      to: new Date('Jan 1 2021'),
      salesman: "none",
      select:[],
      total:0,
      comm:0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    let selected = [] 
    for(let d of this.props.data){
      console.log( d.date.getTime() >= this.state.from.getTime());
      if(d.salesman === this.state.salesman ){
        console.log(d.salesman);
        if(d.date.getTime() >= this.state.from.getTime() && d.date.getTime() <= this.state.to.getTime()){
          selected.push(d);
        } 
      }
    }
    selected.sort(compare);
    let t = 0; let c = 0;
    for(let s of selected){
      t += s.total;
      c += s.commision
    }

    this.setState({select:selected,total: t, comm: c}, ()=>{
      console.log(this.state);
    });
  };
  handleChange = (e) => {
    this.setState({ salesman: e.target.value });
  };
  handleFrom = (e) => {
    this.setState({ from: e });
  };
  handleTo = (e) => {
    this.setState({ to: e });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="Report d-flex flex-column justify-content-center align-items-center h-100">
          <MDBCol lg="8" md="10" className="form-group mt-5 mx-3">
            <Table data = {this.state.select} total={this.state.total} comm={this.state.comm}/>
            <MDBRow className="mt-5 d-flex justify-content-center">
              <MDBCol className="mb-2 d-flex justify-content-center">
                <DatePicker
                  className="mr-5"
                  onChange={this.handleFrom}
                  name="from"
                  value={this.state.from}
                />
                <DatePicker
                  onChange={this.handleTo}
                  name="to"
                  value={this.state.to}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="justify-content-center">
              <MDBCol md="8" className="justify-content-end">
                >
                <select
                  className="form-select mb-3"
                  value={this.state.salesman}
                  onChange={this.handleChange}
                  name="salesman"
                >
                  <option value="none" disabled hidden>
                    Select salesman
                  </option>
                  {personnel.map((item, i) => {
                    return (
                      <option
                        className="stylish-color"
                        value={item.name}
                        key={i}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <MDBBtn className="form-btn" onClick={this.handleClick}>
                  {" "}
                  Submit Date
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </div>
      </React.Fragment>
    );
  }
}

class Table extends React.Component {
  constructor(props){
    super(props)
    
  }
  componentWillUpdate(){
    // let t = 0; let c = 0;
    // for(let d of this.props.data){
    //     t += d.total;
    //     c += d.commision;
    // }
    // this.setState({
    //   total: t,
    //   comm: c
    // })
  }

  render() {
    return (
      <MDBCol className="report-table text-center mt-5">
        <h1 className="text-white ">Sales Report</h1>
        <hr className="white mb-4" />
        <MDBTable  scrollY maxHeight="400px" hover>
          <MDBTableHead color="default-color">
            <tr>
              <th>Date</th>
              <th>Items Sold</th>
              <th>Total Price</th>
              <th>Commission Earned</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
          {this.props.data.map((item, index) =>{
            return (
            <tr>
              <td>{item.date.toString()}</td>
            <td>{item.items.map(i =>{
              return(<p>{i.name}: {i.amount}</p>)
            })}</td>
            <td>{item.total}</td>
            <td>{item.commision}</td>
            </tr> 
            );
          })}
            <tr>
              <td>TOTALS</td>
              <td></td>
              <td>{this.props.total}</td>
              <td>{this.props.comm}</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBCol>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  data: state.formData.allData
});

export default connect(mapStateToProps)(Report);
