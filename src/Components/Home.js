import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Services from './Services'
import Contact from './Contact'
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="my-3">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="container">
      <img className="d-block w-100 img-fluid" src="./img/Home/1.jpg" alt="First slide"/>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container">
      <img className="d-block w-100 img-fluid" src="./img/Home/2.jpg" alt="Second slide"/>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container">
      <img className="d-block w-100 img-fluid" src="./img/Home/3.jpg" alt="Third slide"/>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
      <div className="container my-5 ">
      <h1 className=" services text-uppercase"><span className=" ">Our Services</span><hr className="bg-success"/></h1>
      <div className="row ">
  
        {/* <div className="col-md-8">  */}
        {/* <div className="container"> */}
               
                   <div className="row">
                     
                    <div className="card-deck">
                    <div className="card mb-4">
                      <div className="view overlay">
                        <img className="card-img-top embed-responsive-item" src="./img/green-house-hi.png" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       <div className="card-body">

                        <h4 className="card-title text-capitalize">Household waste recycling </h4>
                       </div>
                    </div>

                    <div className="card mb-4">
                      <div className="view overlay">
                        <img className="card-img-top embed-responsive-item" src="./img/bottle.png" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       <div className="card-body">

                        <h4 className="card-title text-capitalize">Plastic waste collection</h4>
                       </div>
                    </div>

                    <div className="card mb-4">
                      <div className="view overlay">
                        <img className="card-img-top embed-responsive-item" src="./img/greentech.png" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       <div className="card-body">

                        <h4 className="card-title text-capitalize ">GreenTech Solutions</h4>

                        </div>
                    </div>

                    <div className="card mb-4">
                      <div className="view overlay">
                        <img className="card-img-top embed-responsive-item" src="./img/high-school-building-schools.png" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       <div className="card-body">

                        <h4 className="card-title text-capitalize">Schools recycling programme</h4>
                       </div>
                    </div>
                    <div className="card mb-4">
                      <div className="view overlay">
                        <img className="card-img-top embed-responsive-item" src="./img/recycling services.png" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       <div className="card-body">

                        <h4 className="card-title text-capitalize">recycling services</h4>
                       </div>
                    </div>
            </div>
            </div>
            {/* </div> */}
            {/* </div> */}
      </div>

           
            <div className="container">
                <Contact/>
            </div>
            
      
      
      </div>
      </div>
      
    )
  }
}
