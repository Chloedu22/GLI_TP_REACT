import React from 'react';
import './style/total.css';


class Total extends React.Component{
	render(){
		return(
			<div id="total">
				<div id="totalamount">
					Total Amount
				</div>
				<div id="amount">
					{this.props.total}
				</div>
			</div>
		);
	}


}

export default Total;