import React, {Component} from 'react';

class Filter extends Component{
render(){
  return(
    <div className='row'>
			<div className='row'>
				<div className='col-xs-12'>
					<h3>Filtros</h3>
				</div>
			</div>
      <form>
  			<div className='row'>
          <h2>Categoría</h2>
          <input type="radio" name="category" value="not_started"/>Por hacer<br></br>
          <input type="radio" name="category" value="History" checked/>Histórico<br></br>
          <input type="radio" name="category" value="finished"/>Terminadas<br></br>
          <input type="radio" name="category" value="not_finished"/>Incompletas<br></br>
        </div>
        <div className='row'>
          <h2>Orden</h2>
          <input type="radio" name="order" value="priorized" checked/>Priorizado<br></br>
          <input type="radio" name="order" value="date"/>Cronológico<br></br>
        </div>
      </form>
		</div>
  );
}

}

export default Filter;
