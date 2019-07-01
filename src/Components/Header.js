import React, { Component } from 'react'
// import styled from 'styled-components'
import {Link} from 'react-router-dom'
import '../App.css'
// import Dropdown from 'react-bootstrap/Dropdown'
// import Button from 'react-bootstrap/Button'
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
export default class Header extends Component {
  render() {
    return (
          <div>
           <nav className="navbar navbar navbar-expand-lg fixed-top  navbar-white text-white">
  <a className="navbar-brand" href="/">BORLA DAAKYE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto justify-content-between">
      <li className="nav-item active">
        <Link to='/' className="nav-link" > Home</Link>
      </li>
      <li className="nav-item">
      <Link to='/services' className="nav-link" >Services</Link>
       
      </li>
      {/* <li className="nav-item">
      <Link to='/contact' className="nav-link" >Contact us</Link>
      </li> */}
      {/* <li className="nav-item">
      <Link to='/test' className="nav-link" >Test</Link>
      </li> */}
      <li className="nav-item">
      <Link to='/getinvolved' className="nav-link" >Get Involved</Link>
      </li>
    
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Recycling education
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {/* <Link to='/getstarted' > Getstarted</Link> */}
  <Link to='/dos' className="dropdown-item" > Do's</Link>
  <Link to='/dont' className="dropdown-item" > Dont's</Link>
  <Link to='/video' className="dropdown-item"> Videos</Link>
          
          <div className="dropdown-divider"></div>
          {/* <a className="dropdown-item" href="#">Something else here</a> */}
        </div>
      </li>
      
    </ul>
    
  </div>
</nav>
</div>
    // </div>
     
     
     
     
     ) 
 }
}


// const Nav = styled.div`
//   /* background-color: var(--mainGreen); */
//   border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
//   color:var(--mainWhite);
// `;

// const NavHeader = styled.div`
//   max-width: 1010px;
//   padding: 26px 20px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
  
// `;

// const NavLeft = styled.div`
//   width: 20%;
//   text-align: left;
// `;

// // const NavCenter = styled.div`
// //   width: 25%;
// //   text-align: center;
// // `;

// // const Input = styled.input`
// //   font-size: 16px;
// //   border: solid 1px #dbdbdb;
// //   border-radius: 3px;
// //   color: #262626;
// //   padding: 7px 33px;
// //   border-radius: 3px;
// //   color:var(--lightGreen);
// //   cursor: text;
// //   font-size: 14px;
// //   font-weight: 200;
// //   text-align: center;
// //   background: #fafafa;

// //   &:active,
// //   &:focus {
// //     text-align: left;
// //   }
// // `;

// const NavRight = styled.div`
//  float:right;
//   width: 70%;
//   text-align: right;
//   text-decoration:none;
//   color:var(--mainWhite) !important;
//   Button{
//     color:var(--mainWhite) !important;
//   }

//   Dropdown ,Button Link{
//     color:var(--mainWhite) !important;
  
//         margin-right: 0 auto;
//     background: var(--mainWhite);
//     border:  transparent;  
//     /* border-radius:0.1rem; */
//   }
  
  
  
  
// Button, Dropdown:hover{
//      background-color:transparent;
//    }
//   `;
          