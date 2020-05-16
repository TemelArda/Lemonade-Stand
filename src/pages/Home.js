import React from 'react';
import { MDBIcon, MDBCol } from "mdbreact";
import lemon from '../assets/images/lemon.svg'




class Home extends React.Component{
    render(){
        return(
            <div className="Home d-flex justify-content-center align-items-center flex-row h-100">
                <MDBCol md='4' className="lemon-svg">
                    <img src= {lemon} alt = 'Lemon Picture'></img>
                </MDBCol>
                <MDBCol md='8' className="content text-center">
                    <h1 className= 'text-color'>LEMONADE STAND</h1>
                    <div className='links'>
                        <a className="btn peach-gradient pr-4" href="/sales/form" role="button">View Sales Form <MDBIcon far icon="eye" className='eye-icon' /></a>
                        <a className="btn peach-gradient pr-4" href="/sales/report" role="button">View Sales Report <MDBIcon far icon="eye" className='eye-icon' /> </a>
                    </div>
                </MDBCol>
            </div>
        )
    }
}
  
  export default Home;
  