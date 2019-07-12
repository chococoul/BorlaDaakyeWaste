import React, { Component } from 'react'
// import './App.css'
export default class Contact extends Component {
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
    

}
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { name, email } = this.state
      alert(`Your state values: \n 
              name: ${name} \n 
              email: ${email}`)
    };
    onSubmit=(e)=>{
      // console.log('hi')
      e.preventDefault()
      const { name, email, subject, message } = this.state
      console.log(`Your state values: \n 
              name: ${name} \n 
              email: ${email}\n
              subject: ${subject} \n
              message: ${message} \n
              `)
  
    };
    // validateName = () => {
    //   const { name } = this.state;
    //   this.setState({
    //     nameError:
    //       name.length > 3 ? null : 'Name must be longer than 3 characters'
    //   });
    // }
    
    // validateEmail = () => {
    //   const { email } = this.state;
    //   this.setState({
    //     emailError:
    //       email.length > 3 ? null : 'Email must be longer than 3 characters'
    //   });
    // }
    render() {
     
        return (
            <div className="contact">
              <div className="container my-3">
              <h1 className=" services text-uppercase"><span className=" ">Our Impact Goals</span><hr className="bg-success"/></h1>
                
                   <div className="row ">
                    <div className="card-deck  ">
                    <div className="card  mb-4">
                      <div className="view overlay">
                        <img className=" img-fluid " src="./img/ourImpact/12.png" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       {/* <div className="card-body">

                        <h4 className="card-title">Responsible Consumption And production</h4>
                       </div> */}
                    </div>

                    <div className="card mb-4">
                      <div className="view overlay">
                        <img className="img-fluid" src="./img/ourImpact/6.png" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       {/* <div className="card-body">

                        <h4 className="card-title">Clean water and sanitation</h4>
                       </div> */}
                    </div>

                    <div className="card mb-4">
                      <div className="view overlay">
                        <img className="img-fluid" src="./img/ourImpact/13.png" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       {/* <div className="card-body">

                        <h4 className="card-title">Climate Action</h4>

                        </div> */}
                    </div>

                    <div className="card mb-4">
                      <div className="view overlay">
                        <img className="img-fluid" src="./img/ourImpact/14.jpg" alt="Card image cap"/>
                        <a href="#!">
                          <div className="mask rgba-white-slight"></div>
                        </a>
                       </div>
             

                       {/* <div className="card-body">

                        <h4 className="card-title">Life below Water</h4>
                       </div> */}
                    </div>

                    <div className="container  my-3" >
      <section className="section" style={{marginBottom:'100px'}}>               
                <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 bg-light my-5">          
      <div className="row text-center ">
        <div className="col-md-6">
          <a className="btn-floating blue accent-1"><i className="fas fa-map-marker-alt  p-3"></i></a>
          <p>Accra digital center</p>
          <p>Ghana</p>
        </div>

        <div className="col-md-6">
          <a className="btn-floating blue accent-1"><i className="fas fa-phone  p-3"></i></a>
          <p>+ 233-570426896 /<br></br> +233-545842071</p>
          <p>Mon - Fri, 8:00-22:00</p>
        </div>

        <div className="col-md-6">
          <a className="btn-floating blue accent-1"><i className="fas fa-envelope   p-3"></i></a>
          <p>info@bdwaste.com</p>
         
        </div>
        <div className="col-md-6">
          <a className="btn-floating blue accent-1"><i className="fab fa-whatsapp  p-3"></i></a>
          <p>+233570426896</p>
         
        </div>
      </div>
          </div>
                   <div className="col-xs-6 col-sm-6 col-md-6 my-3">
                   <h2 className=" services text-uppercase "><span className=" ">NEWSLETTER</span><hr className="bg-success"/></h2>
   
                     <div className="card">
                        <div className="card-body bg-light  mb-2">
                        <div className="form-header blue accent-1">
                          <h3> Subscribe to our Newsletter</h3>
                        </div>
                        <form onSubmit={this.onSubmit } method='post'>
                          <div className="md-form" >
                              <i className="fas fa-user prefix grey-text"></i>
                              <input type="text" id="form-name" name="name" onChange={this.onChange} value={this.state.name} className={`form-control `}/>
                              {/* { isValidName? null: <div className='invalid-feedback'>Name must be longer than 3 characters</div> } */}
                              <label id="form-name">Your name</label>
                           </div>

                            <div className="md-form">
                              <i className="fas fa-envelope prefix grey-text"></i>
                              <input type="text" id="form-email" name="email" onChange={this.onChange} value={this.state.email}  
                              className={`form-control `}/>
                              {/* { isValidEmail? null: <div className='invalid-feedback'>Email must be longer than 3 characters</div> } */}
                              <label id="form-email">Your email</label>
                            </div>                             

                              <div className="text-center mt-4">
                                <button className="btn btn-dark" type="submit">Subscribe</button>
                              </div>
                          </form>
        </div>

      </div>
         </div>
         

         
          </div>
                   </section>
                     
               </div>

            </div>
            </div>
            </div>
            </div>
        )
    }
}
