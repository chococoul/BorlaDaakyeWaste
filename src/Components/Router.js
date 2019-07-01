import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import GetStarted from './GetStarted';
import Dos from './Dos'
import Donts  from './Dont'
import Videos from './Videos'
import Home from './Home';
import Services from './Services';
import GetInvolved from './GetInvolved';
import Recycling from './Recycling';
import Footer from './Footer';
import Contact from './Contact';
import Test from './Test';
export default class Router extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path="/getinvolved" component={GetInvolved} />
        <Route  path="/recycling" component={Recycling}/>
        <Route path='/getstarted' component={GetStarted}/>
        <Route path='/dos' component={Dos}/>
        <Route path='/dont' component={Donts}/>
        <Route path='/videos' component={Videos}/>
        <Route path ='/contact' component={Contact}/>
        <Route path ='/test' component={Test}/>
        {/* <Route path='/footer' component={Footer}></Route> */}

      </div>
    )
  }
}
