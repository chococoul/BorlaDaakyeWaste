import React, { Component } from 'react'
import Test from './Test';

export default class Services extends Component {
  render() {
    return (
			<div className="">
					<div className=" mt-3 full-container">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="container">
      <img className="d-block w-100" src="./img/Services/1.jpg" alt="First slide"/>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container">
      <img className="d-block w-100" src="./img/Services/2.jpg" alt="Second slide"/>
      </div>
    </div>
    {/* <div className="carousel-item"> */}
    {/* <div className="container">
      <img className="d-block w-100" src="./img/Home/3.jpg" alt="Third slide"/>
      </div>
    </div> */}
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
      <Test/>

	
			</div>
      {/* <!-- Section: Team v.1 --> */}
<section className="team-section text-center my-5 mr-2 ml-2">

  {/* <!-- Section heading --> */}
  <h1 className=" services text-capitalize h1-responsive font-weight-bold my-5"><span className=" ">Our amazing team</span><hr className="bg-success"/></h1>
  {/* <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2> */}
  {/* <!-- Section description --> */}
  

  {/* <!-- Grid row --> */}
  <div className="row">

    {/* <!-- Grid column --> */}
    <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div className="avatar ">
        <img src="/img/TEAM/photo.jpg" className="rounded-circle z-depth-1 img-fluid"
          alt="Sample avatar"/>
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Emmanuel Danso Yaw</h5>
      <p className="text-uppercase blue-text"><strong>Founder -  Business Developer </strong></p>
      {/* <p className="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci sed quia non numquam modi tempora eius.</p> */}
      {/* <ul className="list-unstyled mb-0">
        {/* <!-- Facebook --> */}
        {/* <a className="p-2 fa-lg fb-ic">
          <i className="fab fa-facebook-f blue-text"> </i>
        </a>  */}
        {/* <!-- Twitter --> */}
        {/* <a className="p-2 fa-lg tw-ic">
          <i className="fab fa-twitter blue-text"> </i>
        </a> */}
        {/* <!-- Instagram --> */}
        {/* <a className="p-2 fa-lg ins-ic">
          <i className="fab fa-instagram blue-text"> </i>
        </a>
      </ul> */}
    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div className="avatar mx-auto">
        <img src="/img/TEAM/sayon.jpg" className="rounded-circle z-depth-1 img-fluid"
          alt="Sample avatar"/>
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Sayon Coulibaly</h5>
      <p className="text-uppercase blue-text"><strong>Software Engineer</strong></p>
      {/* <p className="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium
        doloremque rem laudantium totam aperiam.</p>
      <ul className="list-unstyled mb-0">
        {/* <!-- Facebook --> */}
        {/* <a className="p-2 fa-lg fb-ic">
          <i className="fab fa-facebook-f blue-text"> </i>
        </a> */}
        {/* <!-- Instagram --> */}
        {/* <a className="p-2 fa-lg ins-ic">
          <i className="fab fa-instagram blue-text"> </i>
        </a>
      </ul> */} 
    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div className="col-lg-3 col-md-6 mb-md-0 mb-5">
      <div className="avatar mx-auto">
        <img src="/img/TEAM/sherif.jpg" className="rounded-circle z-depth-1 img-fluid"/>
          {/* alt="Sample avatar"> */}
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Sherif Inusah</h5>
      <p className="text-uppercase blue-text"><strong>Banking and Finance</strong></p>
      {/* <p className="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim est fugiat nulla id eu laborum.</p>
      <ul className="list-unstyled mb-0">
        {/* <!-- Facebook --> */}
        {/* <a className="p-2 fa-lg fb-ic">
          <i className="fab fa-facebook-f blue-text"> </i>
        </a>
        {/* <!-- Instagram --> */}
        {/* <a className="p-2 fa-lg ins-ic">
          <i className="fab fa-instagram blue-text"> </i>
        </a> */}
        {/* <!-- Dribbble --> */}
        {/* <a className="p-2 fa-lg ins-ic">
          <i className="fab fa-dribbble blue-text"> </i>
        </a> */}
      {/* </ul>  */}
    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div className="col-lg-3 col-md-6">
      <div className="avatar mx-auto">
        <img src="/img/TEAM/richard.jpg" className="rounded-circle z-depth-1 img-fluid"/>
          {/* alt="Sample avatar"> */}
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Richard Hartung </h5>
      <p className="text-uppercase blue-text"><strong>Advisor</strong></p>
      {/* <p className="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
        totam officia voluptates perferendis voluptatibus aut.</p>
      <ul className="list-unstyled mb-0">
        {/* <!-- Facebook --> */}
        {/* <a className="p-2 fa-lg fb-ic">
          <i className="fab fa-facebook-f blue-text"> </i>
        </a> */}
        {/* <!-- Github --> */}
        {/* <a className="p-2 fa-lg ins-ic">
          <i className="fab fa-github blue-text"> </i>
        </a>
      // </ul> */} 
    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</section>
{/* <!-- Section: Team v.1 --> */}      
      </div>
    )
  }
}

