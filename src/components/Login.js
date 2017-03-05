import React, {Component} from 'react';
import * as api from '../api';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			show: 'visible'
		}
	}

	getUser = (username, callback) => { api.getUser(username, callback)};

	setUser = ( obj ) => {
		this.setState({show:'hidden', user: obj[0]});
	}

	render() {
            return(
      <div className={this.state.show+' login'}>
      <div className='row'>
      	<img src='./style/imgs/smartPlanner.png' className='login-logo'/>
      </div>
	  <div className='row'>
	  <div className='col-xs-1 col-md-4'></div>
	  <div className='col-xs-10 col-md-4'>
	  	<h2>Seleccione un usuario</h2>
	  	<button className='btn btn-default' onClick={() => this.getUser('Jose', (obj)=>{
	  		this.setUser(obj);
	  	})}>JDF</button>
	  	<button className='btn btn-default' onClick={() => this.getUser('Daniel', (obj)=>{
	  		this.setUser(obj);
	  	})}>DA</button>
	  </div>
	  <div className='col-xs-1 col-md-4'></div>
	  </div>
	  </div>
);
	}

}

export default Login;