import React, { Component } from 'react';
import axios from 'axios';

export default class GetInvolved extends Component {
  state = {
    name: '',
    subject:'',
    message: '',
    email: '',
    errorName:'',
    errorEmail:'',
  }
    
  onChange =(e)=>{
    this.setState ({[e.target.name]: e.target.value})
    this.validateName();
    this.validateEmail();

}
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { name, email } = this.state
      alert(`Your state values: \n 
              name: ${name} \n 
              email: ${email}`)
    };
    onSubmit=(e)=>{
      console.log('hi')
      e.preventDefault()
      const { name, email, subject, message } = this.state
      console.log(`Your state values: \n 
              name: ${name} \n 
              email: ${email}\n
              subject: ${subject} \n
              message: ${message} \n
              `)
  
    };
    validateName = () => {
      const { name } = this.state;
      this.setState({
        nameError:
          name.length > 3 ? null : 'Name must be longer than 3 characters'
      });
    }
    
    validateEmail = () => {
      const { email } = this.state;
      this.setState({
        emailError:
          email.length > 3 ? null : 'Email must be longer than 3 characters'
      });
    }

  render() {
    const isValidName = this.state.name.length > 3;
  const isValidEmail = this.state.email.length > 3;
  // const isValidSubject= this.state.name.length > 3;
  // const isValidMessage = this.state.email.length > 3;
    return (
 <div className="bg-white">
        <div className=" text-center  my-3">
                <div className="blink">
                 Together we can protect the rivers that connects us, the air we breathe by recycling our waste !!!
                </div>
              </div>

    <div className="container bg-succes my-3" >
      <section className="section" style={{marginBottom:'100px'}}>
      <h1 className=" services text-uppercase"><span className=" "></span><hr className="bg-success"/></h1>
                   <p className="section-description pb-4">We will be very glad to hear from you kindly reach us via the contact form below: </p>
                <div className="row">
                   <div className="col-xs-6 col-sm-6 col-md-6">
                     <div className="card">
                        <div className="card-body bg-light  mb-2">
                        <div className="form-header blue accent-1">
                          <h3><i className="fas fa-envelope"></i> Write to us:</h3>
                        </div>
                        <form className="contact-form" onSubmit={this.onSubmit } method='post'>
                          <div className="md-form">
                          
                              <i className="fas fa-user prefix grey-text"></i>
                              <label id="form-name">Your name</label> 
                              <input type="text" id="form-name" name="name" onChange={this.onChange} value={this.state.name} className={`form-control `}/>
                              {/* { isValidName? null: <div className='invalid-feedback'>Name must be longer than 3 characters</div> } */}
                           </div>

                            <div className="md-form">
                              <i className="fas fa-envelope prefix grey-text"></i> <label id="form-email">Your email</label>
                              <input type="text" id="form-email" name="email" onChange={this.onChange} value={this.state.email} 
                              className={`form-control `}/>
                              {/* { isValidEmail? null: <div className='invalid-feedback'>Email must be longer than 3 characters</div> } */}
                            </div>

                              <div className="md-form">
                                <i className="fas fa-tag prefix grey-text"></i> <label id="form-Subject">Subject</label>
                                <input type="text" id="form-Subject" name="subject" onChange={this.onChange} value={this.state.subject} 
                                className="form-control"/>
                                
                              </div>

                              <div className="md-form">
                                <i className="fas fa-pencil-alt prefix grey-text"></i>
                                <textarea id="form-text" onChange={this.onChange}  value={this.state.message} name="message" className="form-control md-textarea"  rows="3"></textarea>
                                
                              </div>

                              <div className="text-center mt-4">
                                <button className="btn btn-dark" type="submit">Send</button>
                              </div>
                              </form>

        </div>

      </div>
         </div>
         

          <div className="col-xs-6 col-sm-6 col-md-6 bg-light mb-2">
          <div id="map-container-google-11" className="z-depth-1-half map-container-6 " style={{height: '300px'}}>
        <iframe src="https://maps.google.com/maps?q=accra%20digital%20center&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
      </div>
      <div className="row text-center ">
        <div className="col-md-6">
          <a className="btn-floating blue accent-1"><i className="fas fa-map-marker-alt text-dark"></i></a>
          <p>Accra digital center</p>
          <p>Ghana</p>
        </div>

        <div className="col-md-6">
          <a className="btn-floating blue accent-1" ><i className="fas fa-phone text-dark"></i></a>
          <p>+ 233-570426896 /<br></br> +233-545842071</p>
          <p>Mon - Fri, 8:00-22:00</p>
        </div>

        <div className="col-md-6">
          <a className="btn-floating blue accent-1" mailto='info@bdwaste.com'><i className="fas fa-envelope text-dark "></i></a>
          <p>info@bdwaste.com</p>
         
        </div>
        <div className="col-md-6">
          <a className="btn-floating blue accent-1"href="whatsapp://send?abid=+233570426896&text=Hello%2C%20World!"><i className="fab fa-whatsapp text-dark"></i></a>
          <p>+233570426896</p>
         
        </div>
      </div>
          </div>
          </div>
                   </section>
                     
               </div>
      </div>
    )
  }
}

