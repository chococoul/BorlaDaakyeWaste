import React, { Component } from 'react'

export default class Donts extends Component {
  render() {
    return (
      <div className="donts">
        <div className="container my-3">
        <div className="dont-title">
                <h3 className="text-center">
                No plastic bags should end up in your recycling container.
                </h3>
                </div>
                
            

              <section className="section my3 bg-light" style={{marginBottom: '80px'}}>
                   <h2 className="section-heading  pt-4">Also Do not include:</h2>
                   <div className="row">
                     <div className="col ">
                       <ul className=" font-weight-bold">
                         <li>Food scraps</li>
                         <li>Drinking cups</li>
                         <li>Broken or sharp glass</li>
                         <li>Fluorescent bubs</li>
                         <li>Batteries</li>
                         <li>Needles</li>
                         <li>Plastic stretch wrap and film</li>
                         <li>Clothing or rags</li>
                         <li>Garden waste</li>
                         <li>Nappies</li>
                         <li>Liquid or oils</li>
                         
                       </ul>

                     </div>

                   </div>
              </section>

        </div>
      </div>
    )
  }
}
