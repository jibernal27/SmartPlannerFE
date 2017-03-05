import React, { Component } from 'react';
import Hmk from './Hmk';

class HmkList extends Component {

	render(){
		console.log('HmkList');
		console.log(this);
		console.log(this.props.hmkList);
	return (
		<div className='col-md-8'>
			<div className='row'>
				<div className='col-xs-12'>
					<h1>¡Hola {this.props.user.user_name}!</h1>
					<p>Estas son las tareas que tienes.</p>
				</div>
			</div>
			<div className='row'>
			{ this.props.hmkList.map(hmk => {
      			return <Hmk className="hmk" key={hmk._id} hmk={hmk} />
    		})}
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
