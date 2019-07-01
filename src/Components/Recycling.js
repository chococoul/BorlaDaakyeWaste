import React, { Component } from 'react'
import GetStarted from './GetStarted';
import Dos from './Dos';
import Donts from './Dont'
import {Route} from 'react-router-dom'
export default class Recycling extends Component {
  render() {
    return (
      <div className="container">
        <Route path='/getstarted' component={GetStarted}/>
        <Route path='/dos' component={Dos}/>
        <Route path='/dont' component={Donts}/>
      </div>
    )
  }
}
