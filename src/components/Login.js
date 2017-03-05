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
	  <div className={this.state.show +' login'}>
	  <div className='loginOptions'>
	  	<h2>Seleccione usuario</h2>
	  	<button className='btn btn-default' onClick={() => this.getUser('Jose', (obj)=>{
	  		this.setUser(obj);
	  	})}>JDF</button>
	  	<button className='btn btn-default' onClick={() => this.getUser('Daniel', (obj)=>{
	  		this.setUser(obj);
	  	})}>DA</button>
	  </div>
	  </div>
);
	}

}

export default Login;