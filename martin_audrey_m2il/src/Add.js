import React from 'react';
import './style/add.css';
import data from './data.json';


class Add extends React.Component{

	constructor(props) {
    	super(props);
    	this.state = {paidBy: data.users[0],title: '',amount:0};
		this.handleChange = this.handleChange.bind(this);
		this.returnToApp = this.returnToApp.bind(this);
  	}

  	handleChange(event) {
    	this.setState({[event.target.name] : event.target.value});
    }

    returnToApp(){
		this.props.rowCost(this.state.paidBy,this.state.title,this.state.amount);
    }

	render(){
		return (
			<div id="add">
				<select id="selectUser" name="paidBy" onChange={this.handleChange}>
			      	{data.users.map((user)=> <option>{user}</option>)}
			    </select>
			    <input id="inputTitle" name="title" type="text" placeholder="title" onChange={this.handleChange}/>
			    <input id="inputAmount" name="amount" type="number" placeholder="0" onChange={this.handleChange}/>
			    <button id="buttonAdd" onClick={this.returnToApp}>+</button>
		    </div>
		);
	}
}

export default Add;