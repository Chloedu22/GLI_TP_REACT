import React from 'react';
import ListCosts from './ListCosts.js';
import Filter from './Filter.js';
import Title from './Title.js';
import Add from './Add.js';
import Total from './Total.js';
import data from './data.json';
import './style/App.css';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
        costsArray:data.costs,
        costsArrayFiltered:data.costs,
        total:data.total,
        filter:''
      };
    this.callbackAdd = this.callbackAdd.bind(this);
    this.callbackFilter = this.callbackFilter.bind(this);
    this.filterElement = this.filterElement.bind(this);
  }

  callbackAdd(paidByChild, titleChild, amountChild){
    this.setState({
      costsArray: [
        ...this.state.costsArray,{
          paidBy: paidByChild,
          title: titleChild,
          amount: amountChild
        }
      ]
    });
    this.setState({total: parseFloat(this.state.total) + parseFloat(amountChild)}, function(){
      this.filterElement();
    });
    
  }

  callbackFilter(filterChild){
    this.setState({filter:filterChild}, function(){
      this.filterElement();
    });
  }

  filterElement(){
    let filter = this.state.filter;
    this.setState( {costsArrayFiltered:this.state.costsArray.filter(
      function(el){
        return el.paidBy == filter ||
                filter == ''
    })});
  }


  render(){
    return (
      <div>
        <Title/>
        <Filter filterParent={this.callbackFilter}/>
        <ListCosts newCost={this.state.costsArrayFiltered} />
        <Add rowCost={this.callbackAdd}/>
        <Total total={this.state.total}/>
        
      </div>
      );
  }
}


export default App;
