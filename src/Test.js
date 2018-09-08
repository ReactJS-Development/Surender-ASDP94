import React, { Component } from 'react';

//this is constructer example method , and function
class Test extends Component
{
  constructor(props) {
    super(props);
    console.log('This data show in constructor, state is define in constructor');
    
  }
  handleClick() {
    console.log('This is the methods');
  }
  show = () => {
    console.log('This is the function');
  }
  render() 
		{
    		return(
    		<div>
    		 <button onClick={this.handleClick}>function</button>
    		 <button onClick={this.show}>methods </button>
    		 </div>
  			);}
		}
		
export default Test;