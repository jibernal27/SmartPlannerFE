import React, {Component} from 'react';
import axios from 'axios';
import HmkList from './HmkList';
import HmkCreateEdit from './HmkCreateEdit';
import NavBar from './NavBar';
import Login from './Login';
import * as api from '../api';
import {gs} from '../GlobalState';
const WrappedLogin = gs(Login);
const WrappedNavBar = gs(NavBar);
const WrappedHmkList = gs(HmkList);

//TODO Poner back en heroku para poder obtner url
const ROOT_URL = "";


class SmartPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //TODO Establecer variables a tener en cuenta para manejar en el estado
      //posiblemente lista de tareas y una tarea actual seleccionada y el usuario actual
      hmks : [],
      login: 'show',
      user: {},
      username: ''
    }
    this.props.setState({user:{username:''}});
    console.log(this.props.state.username);
  }

  render() {
    return(
      //TODO creación de plantilla para mostrar lista de tareas-
      <div>
        <WrappedLogin />
        <WrappedNavBar />
        <WrappedHmkList />
        <HmkCreateEdit />
      </div>
    )
  }
}

export default SmartPlanner;
