import React, { Component } from 'react';
import Hmk from './Hmk';

class HmkList extends Component {
	
	constructor(props){
		super(props);
	}

	render(){return (
		<ul>
		<li>weno al menos ya sale</li>
		<li>{this.props.loading}</li>
		</ul>
		)
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