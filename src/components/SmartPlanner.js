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
      user: {'user_name':''},
      category: 'history',
      order: 'priorized'
    }

  }

  getUser = (username, callback) => { api.getUser(username, callback)};

  getHmks = (userId, category, order, callback) => { api.getHmks(userId, category, order, callback)};

  setUser = ( obj ) => {
    this.getHmks(obj[0]._id, this.state.category, this.state.order, (hmks)=>{ //se estan pidiendo inicialmente todas las tareas
        console.log('tareas');
        console.log(hmks);
        this.setState({login:'hidden', user:obj[0], hmks: hmks});
      });
  }

  /*Actualiza las tareas teniendo en cuenta parametros de filtro cambiados*/
  updateQuery = (query) => {
    var userId = this.state.user._id;
    var category = query.category || this.state.category;
    var order = query.order || this.state.order;
    this.setState({category:category,
                   order:order});
    this.getHmks(userId, category, order, (hmks)=>{
        console.log('tareas actualizadas por filtro');
        console.log(hmks);
        this.setState({hmks: hmks});
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
        <WrappedFilter updateQuery={this.updateQuery}/>
      </div>
    )
  }
}

export default SmartPlanner;
