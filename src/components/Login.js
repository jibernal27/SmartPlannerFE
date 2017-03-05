import React, {Component} from 'react';
import * as api from '../api';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			show: this.props.show
		}
		console.log(props);
		
	}

	getUser = (username, callback) => { api.getUser(username, callback)};

	getHmks = (userId, category, order, callback) => { api.getHmks(userId, category, order, callback)};

	setUser = ( obj ) => {

		this.props.setState({login:'hidden', user:obj[0]});
		this.getHmks(this.props.state.user._id, 'not_finished', 'priorized', (obj)=>{
			this.props.setState({hmks: obj});
		});
	}

	render() {
            return(
      <div className={this.props.state.login+' login'}>
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