import React, {Component} from 'react';

class Filter extends Component{

  setCategory(event){
    this.props.updateQuery({category: event.target.value});
  }

  setOrder(event){
    this.props.updateQuery({order: event.target.value});
  }

  render(){
  return(
    <div className='col-md-2'>
			<div className='row'>
				<div className='col-xs-12'>
					<h2>Filtros</h2>
				</div>
			</div>

  			<div className='row radio-buttons' onChange={this.setCategory.bind(this)}>
          <h3>Categoría</h3>
          <input type="radio" name="category" value="not_started"/>Por hacer<br></br>
          <input type="radio" name="category" value="History" defaultChecked/>Histórico<br></br>
          <input type="radio" name="category" value="finished"/>Terminadas<br></br>
          <input type="radio" name="category" value="not_finished"/>Incompletas<br></br>
        </div>
        <div className='row radio-buttons'  onChange={this.setOrder.bind(this)}>
          <h3>Orden</h3>
          <input type="radio" name="order" value="priorized" defaultChecked/>Priorizado<br></br>
          <input type="radio" name="order" value="date"/>Cronológico<br></br>
        </div>
		</div>
  );
}

}

export default Filter;
