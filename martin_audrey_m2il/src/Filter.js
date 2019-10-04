import React from 'react';
import data from './data.json';
import './style/filter.css';

class Filter extends React.Component{

	constructor(props){
		super(props);
		this.state={filter:''};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name] : event.target.value}, function() {
			this.props.filterParent(this.state.filter); 
		})
	}
	
	render(){
	    return (
	    	<div  id="filterDiv">
		    	<label>Filter:</label>
				  <select name="filter" onChange={this.handleChange}>
				  	<option value=''>Aucun</option>
		      		{data.users.map((user)=> <option value={user} >{user}</option>)}
		      	</select>
	      	</div>
      );
  }
}

export default Filter;