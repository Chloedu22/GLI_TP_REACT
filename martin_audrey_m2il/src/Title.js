import React from 'react';
import './style/title.css';
import ls from 'local-storage';

class Title extends React.Component{
  render(){
    return (
    	 <div id="title">
    	 	{ls.get('title')}
    	 </div>
    );
  }
}

export default Title;