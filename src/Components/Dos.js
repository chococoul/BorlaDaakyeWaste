import React, { Component } from 'react'

export default class Dos extends Component {
  render() {
    return (
      <div className="dos">
      <div className="container">
        <div className="row">
          <div className="col ">
                  
                        <ol className=".list-unstyled  my-3  ">
                <li> Always put all bottles, papers and cans in the recycling container</li>
                <li> Remember to keep items clean and dry always</li>
                <li> No plastic bags should end up in your recycling container</li>

            </ol>

            
      </div>
      </div>
      
</div>
      
      <div className="container-fluid content-row mt-3 mb-5 " >
         <div className="row">
               <div  className="col-sm-4 d-flex pb-3 ">
                <div className="card my-3">
                <div className="card-horizontal my-5">
                    <div className="img-square-wrapper">
                        <img className="img-fluid"  width="250" height="250" src="./img/webpics/bottle.png" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Plastics/Bottles</h4>
                        <ul className="card-text">
                          <li>All bottles</li>
                          <li>Jars</li>
                          <li>Jugs</li>
                          <li>Tubs</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div  className="col-sm-4 d-flex pb-3 ">
                    <div className="card my-3">
                    <div className="card-horizontal my-5">
                    <div className="img-square-wrapper">
                        <img className="img-fluid"   src="./img/webpics/paper.png" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Papers/CardBoard</h4>
                        <ul className="card-text">
                          <li>News papers</li>
                          <li>Books</li>
                          <li>Magazines</li>
                          <li>Cereal boxes</li>
                          <li>Paper Board</li>
                        </ul>
                    </div>
                </div>
                    </div>
                </div>
                <div  className="col-sm-4 d-flex pb-3 ">
                    <div className="card my-3">
                    <div className="card-horizontal my-5">
                    <div className="img-square-wrapper">
                        <img className="img-fluid"  width="250" height="250" src="./img/webpics/can.jpg" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Metals</h4>
                        <ul className="card-text">
                          <li>Tin cans</li>
                          <li>Aluminium cans</li>
                          <li>Steel cans</li>
                        </ul>
                    </div>
                </div>
                    </div> 
                </div>
                <div  className="col-sm-4 d-flex pb-3 ">
                    <div className="card my-3">
                    <div className="card-horizontal my-5">
                    <div className="img-square-wrapper">
                        
                        <img className=" img-fluid"  width="250" height="250" src="./img/webpics/glass.png" alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Glass</h4>
                        <ul className="card-text">
                          <li>Soft drinks bottles</li>
                          <li>Food</li>
                          <li>Wine bottles</li>                          
                        </ul>
                    </div>
                </div>
                    </div>
                </div>
                
      </div>

  </div>
      </div>
        
    )
  }
}
