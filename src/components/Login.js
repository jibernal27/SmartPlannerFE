import React, {Component} from 'react';
import * as api from '../api';

class Login extends Component {

		render() {
	    console.log('login');
	    console.log(this);
            return(
      <div className={this.props.login+' login'}>
      <div className='row'>
      	<img src='./style/imgs/smartPlanner.png' className='login-logo'/>
      </div>
	  <div className='row'>
	  <div className='col-xs-1 col-md-4'></div>
	  <div className='col-xs-10 col-md-4'>
	  	<h2>Seleccione un usuario</h2>
		    {/* El uso de props para compartir información entre modulos me parece que podria llevar a que el resultado no sea el esperado, ya se porque el componente 
		    no se inicio o por otro motivo.  Por ejemplo no se de donde sale el getUser. Es parte del api?*/}
	  	<button className='btn btn-default' onClick={() => this.props.getUser('Jose', (obj)=>{
	  		this.props.setUser(obj);
	  	})}>JDF</button>
	  	<button className='btn btn-default' onClick={() => this.props.getUser('Daniel', (obj)=>{
	  		this.props.setUser(obj);
	  	})}>DA</button>
	  </div>
	  <div className='col-xs-1 col-md-4'></div>
	  </div>
	  </div>
);
	}

}

export default Login;
