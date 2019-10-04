import React from 'react';
import './style/costs.css';

class Costs extends React.Component{
	render(){
		return (
			<tr>
				<td class="tdcosts">{this.props.paidBy}</td>
				<td class="tdcosts" id="tdtitle">{this.props.title}</td>
				<td class="tdcosts" id="tdamount">{this.props.amount} €</td>
			</tr>
			
		);
	}
}

export default Costs;