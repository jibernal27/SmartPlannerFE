import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import HmkCreateEdit from './HmkCreateEdit';

class NavBar extends Component {

	render() {
    console.log('navbar');
    console.log(this);
		return(
      <div>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">
      			<img alt="Smart Planner" src="./style/imgs/smartPlanner.png" className="logo_img" />
      </a>
    </div>
    <div className="navbar-collapse collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={() => {this.props.toggleAddHmk('show')}}>Crear Tarea</a></li>
        <li><a href="#" onClick={() => {this.props.toggleLogin('show')}}><span className="glyphicon glyphicon-log-in"></span> Cambiar Usuario</a></li>
      </ul>
    </div>
  </div>
  </nav>
  <HmkCreateEdit show={this.props.addHmk} modalAction={this.props.postHmk} toggleModal={this.props.toggleAddHmk}/>
  </div>

      );

	}

}

export default NavBar;
/*

      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">
      			<img alt="Smart Planner" src="./style/imgs/smartPlanner.png" className="logo_img" />
      </a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
      	<li>prueba</li>
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
*/
