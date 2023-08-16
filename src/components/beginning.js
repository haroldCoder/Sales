import React, {Component} from 'react';
import fire from '../img/fire.png';
import App from '../App';

export default class Beginning extends Component{
	state = {
		count: 2
	}
	componentDidMount(){
		setInterval(()=>{
			if(this.state.count != 0)
			  this.setState({count: this.state.count-1});
		},1200);
	}
	render(){
		if(this.state.count != 0){
		return(
			<div className="App">
               <header className="App-header">
                 <img src={fire} className="App-logo" alt="logo" />
                 <p>
                   WELCOME TO KODERX SALES {this.state.count}
                 </p>
                 <a className="App-link" href="https://briefcase-coderx.herokuapp.com/" target="_blank" rel="noopener noreferrer">Briefcase Coderx</a>
               </header>
           </div>
		)
		}
	   else{
		 return(
			<App/>
		 )
	   }
	}
}