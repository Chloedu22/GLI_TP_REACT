import React from 'react';
import Costs from './Costs.js';
import './style/listcosts.css';


class ListCosts extends React.Component{

	render(){
    	return (
    		<table id="listcosts">
    			<thead>
    				<tr>
    					<th>Name</th>
    					<th>Title</th>
    					<th>Amount</th>
    				</tr>
    			</thead>
    			<tbody>

				{this.props.newCost.map((newcost) => 
					{return <Costs paidBy={newcost.paidBy}
									title={newcost.title}
									amount={newcost.amount} />})}
				</tbody>
				
    		</table>
    	);
	}
}


export default ListCosts;