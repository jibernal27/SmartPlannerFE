import React, {Component} from 'react';
import axios from 'axios';
import HmkList from './HmkList';
import HmkCreateEdit from './HmkCreateEdit';
import NavBar from './NavBar';
import Login from './Login';
import Filter from './Filter';
import * as api from '../api';
import {gs} from '../GlobalState';
const WrappedLogin = gs(Login);
const WrappedNavBar = gs(NavBar);
const WrappedHmkList = gs(HmkList);
const WrappedFilter = gs(Filter);

//TODO Poner back en heroku para poder obtner url
const ROOT_URL = "";

class SmartPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hmks : [],
      login: 'show',
      hmkEditor: 'hidden',
      user: {'user_name':''}
    }
    
  }

  getUser = (username, callback) => { api.getUser(username, callback)};

  getHmks = (userId, category, order, callback) => { api.getHmks(userId, category, order, callback)};

  setUser = ( obj ) => {
    this.getHmks(obj[0]._id, '', '', (hmks)=>{ //se estan pidiendo inicialmente todas las tareas
        console.log('tareas');
        console.log(hmks);
        this.setState({login:'hidden', user:obj[0], hmks: hmks});
      });
  }


  render() {
    console.log('SP');
    console.log(this);
    return(
      <div>
        <WrappedLogin getUser={this.getUser} setUser={this.setUser} user={this.state.user} login={this.state.login}/>
        <WrappedNavBar postHmk={this.postHmk} toggleLogin={(loginState) => {this.setState({login: loginState})}}/>
        <WrappedHmkList user={this.state.user} hmkList = {this.state.hmks}/>

      </div>
    )
  }
}

export default SmartPlanner;
