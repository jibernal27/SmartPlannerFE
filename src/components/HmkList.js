import React, { Component } from 'react';
import Hmk from './Hmk';

class HmkList extends Component {
	
	constructor(props){
		super(props);
		console.log(props.state.user);
	}

	render(){
	return (
		<div className='row'>
			<div className='row'>
				<div className='col-xs-12'>
					<h1>¡Hola {this.props.state.user && this.props.state.user.username}}!</h1>
					<p>Estas son las tareas que tienes.</p>
				</div>	
			</div>
			<div className='row'>
		
			{this.props.state.hmks && this.props.state.hmks.map(hmk => (
      			<Hmk className="hmk" key={hmk._id} />
    		))}
		</div>
		</div>
		);
	}
}
/*
HmkList.propTypes = {
  userId: PropTypes.object,
  hmkList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  deleteHmk: PropTypes.func,
  editHmk: PropTypes.func
};
*/
export default HmkList;