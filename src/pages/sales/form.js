import React from "react";
import Navbar from "../../components/navbar";
import { MDBBtn, MDBCol, MDBRow } from "mdbreact";
import { connect } from 'react-redux';
import { fetchData } from '../../actions/formActions';
import PropTypes from 'prop-types'
import DatePicker from "react-date-picker";


const items = [
  { name: "Fresh Lemon Lemonade", cost: 1.5 },
  { name: "Orange & Lemon Splash", cost: 2.0 },
  { name: "Sugary Shocker", cost: 3.0 },
  { name: "Wild Whiskey Whack", cost: 5.5 },
];
const personnel = [
  { name: "Jeff Terry", pos: "Senior", commision: 0.1 },
  { name: "Thomas Black", pos: "Manager", commision: 0.2 },
  { name: "John Rice", pos: "Junior", commision: 0.05 },
  { name: "Larry Long", pos: "Junior", commision: 0 },
];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Fresh: { value: 0 },
      Orange: { value: 0 },
      Sugary: { value: 0 },
      Wild: { value: 0 },
      salesman: "none",
      Total: 0,
      date:new Date('Jan 1 2020'),
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
  }

  calcTotal = () => {
    let total = 0;
    let i = 0;
    for (let d in this.state) {
      if (d !== "salesman" && d !== "Total" && d !== 'date') {
        if(!isNaN(this.state[d].value)){
          total += items[i].cost * this.state[d].value;
        }else{
          total = -1;
          break;
        }
        i++;
      }
    }
    return total;
  };

  calcComm = (total) => {
    let comm = 0;
    personnel.forEach((p) => {
      if (p.name === this.state.salesman) {
        comm = total * p.commision;
      }
    });
    return comm.toFixed(2);
  };

  handleDate = (e)=>{
    this.setState({date:e})
  }
  handleChange = (e) => {
    let name = e.target.name;
    let value;
    if (name !== "salesman") {
      let nums = e.target.value;
      if (!isNaN(Number(nums))) {        
        nums = Number(nums);
      } 
      let value = { value: nums};
      let t = this.calcTotal()
      this.setState({ [name]: value}, ()=>{
        let t = this.calcTotal()
        
        if(t == -1){
          t = 'NaN'
        }
        this.setState({Total: t});
      });
    } else {
      
      this.setState({ [name]: e.target.value });
      
    }
    
  };

  handleClick() {    
    if (this.state.Total === 'NaN') {
      alert("invalid input");
    } else {
      let comm = this.calcComm(this.state.Total);
      console.log(comm.typeOf);
      comm = Number(comm);
      let data = {
        total:this.state.Total,
        commision: comm,
        salesman: this.state.salesman,
        items:[{ name: "Fresh Lemon Lemonade", amount: this.state.Fresh.value },
        { name: "Orange & Lemon Splash", amount:this.state.Orange.value },
        { name: "Sugary Shocker", amount: this.state.Sugary.value},
        { name: "Wild Whiskey Whack", amount: this.state.Wild.value },],
        date: this.state.date
      }
      this.props.fetchData(data);

      console.log(Date());
      console.log(data);
      this.setState({
        Fresh: { value: 0 },
        Orange: { value: 0 },
        Sugary: { value: 0 },
        Wild: { value: 0 },
        Total:0,
        salesman: "none",
        date:new Date('Jan 1 2020')
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="Form h-100 d-flex justify-content-center align-items-center">
          <MDBCol lg="6" md="9" className="form-group mt-5 mx-3">
            <MDBRow>
              <h2 className="white-text mx-auto">Sales Data Form</h2>
            </MDBRow>
            <hr className="white" />
            <h4 className="white-text text-center">
              {" "}
              Enter the number of each drink ordered
            </h4>
            {items.map((item, index) => {
              return (
                <MDBRow className="my-4" key={index}>
                  <MDBCol>
                    <h6 className="white-text">{item.name}:<br/>${item.cost.toFixed(2)}/cup</h6>
                  </MDBCol>
                  <MDBCol md="3" sm="5">
                    <input
                      name={item.name.split(" ")[0]}
                      type="text"
                      value={ this.state[item.name.split(" ")[0]].value}
                      className={
                        isNaN(this.state[item.name.split(" ")[0]].value)
                          ? "form-control is-invalid"
                          : `form-control`
                      }
                      onChange={this.handleChange}
                      placeholder={
                        this.state[item.name.split(" ")[0]] === ""
                          ? `\$${item.cost.toFixed(2)}/cup`
                          : ""
                      }
                    />
                  </MDBCol>
                </MDBRow>
              );
            })}
            <MDBRow >
              <MDBCol className="d-flex justify-content-end" md ='10'><h4 className="text-white">Total:</h4></MDBCol>
              <MDBCol className="d-flex justify-content-start" m='2'><h4 className="text-white">{this.state.Total}</h4></MDBCol>
            </MDBRow>
            <hr className="white mt-3" />
            <MDBRow className="mt-3">
              <MDBCol md="6">
                <select
                  className="form-select"
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
              </MDBCol>
              <MDBCol md='6' className='mt-2'>
                <DatePicker
                    className="mr-5"
                    onChange={this.handleDate}
                    name="from"
                    value={this.state.date}
                  />
              </MDBCol>
            </MDBRow>
            
            <MDBRow className="mt-5 mx-3 d-flex justify-content-end">
              <MDBBtn className="form-btn" onClick={this.handleClick}>
                Submit Form
              </MDBBtn>
            </MDBRow>
          </MDBCol>
        </div>
      </React.Fragment>
    );
  }
}

Form.propTypes={
  fetchData: PropTypes.func.isRequired
}

export default connect(null, {fetchData}) (Form);
