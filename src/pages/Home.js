import React from 'react';
import { MDBIcon, MDBCol, MDBAnimation, MDBRow } from "mdbreact";
import lemon from '../assets/images/lemon.svg'




class Home extends React.Component{
    render(){
        return(
            <MDBRow className="Home d-flex justify-content-center align-items-center flex-row h-100">
                <MDBCol md='4' className="lemon-svg">
                    <img src= {lemon} alt = 'Lemon Picture'></img>
                </MDBCol>
                <MDBCol className="content d-flex justify-content-center text-center">
                    <div className='links text-center d-flex justify-content-center flex-column'>
                    <h1 className= 'text-color'>LEMONADE STAND</h1>
                    <MDBAnimation type="fadeInRight" duration = '2s'>
                        <a className="btn peach-gradient pr-4" href="/sales/form" role="button">View Sales Form <MDBIcon far icon="eye" className='eye-icon' /></a>
                        <a className="btn peach-gradient pr-4" href="/sales/report" role="button">View Sales Report <MDBIcon far icon="eye" className='eye-icon' /> </a>
                    </MDBAnimation>                    
                    </div>
                </MDBCol>
            </MDBRow>
        )
    }
}
  
  export default Home;
  