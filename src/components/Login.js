import React, {Component} from 'react';
import * as api from '../api';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			on: true
		}
	}


	render() {
            return(
	  <div className={this.props.on}>
	  	<h2>Seleccione usuario</h2>
	  </div>
);
	}

}

export default Login;