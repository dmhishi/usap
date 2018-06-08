import React, { Component } from 'react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.css';

import logo from '../assets/images/usap_logo_web.jpg';




export default class Home extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <body>
	
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><img src={logo} className="App-logos" alt="logo" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav pull-right">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/profiles">Profiles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/news">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/login">Login</a>
      </li>
    </ul>
  </div>
</nav>
	
	<div class="container-fluid center">
    <div class="row">
        <div align="center" >
       Home Page for USAP
        </div>
        
    </div>
</div>
	

	
</body>
      )
   }
}