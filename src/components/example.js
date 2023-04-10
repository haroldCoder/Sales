import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import products from '../products.json';
import Warning from '../layout/warning';
import Card from '../layout/card';


class Example extends Component{
	componentDidMount(){
		this.Manager()
		$("body").append(`<div class="adv"></div>`);
		ReactDOM.render(
			<Warning adv="The following products shown below are just an example of what the user could do in this sales app, such products will not be sponsored
			 or marketing except if said brands want it, they can contact the coderx developers team."/>,
			 document.querySelector('.adv')
		);
	}
	render(){
		return(
			<div className="containe">
			<div className="row d-flex cont">
				{
					products.map(e=>(
						<Card title={e.title} description={e.description} imgURI={e.cover} author="el programador SKRT"/>
					))
				}
			</div>
		 </div>
		);
	}
	Manager = () =>{
		$("body").css("background","#c8daff");
		$(".containe").css("padding","10px 0 0 0");
		$(".container > .row").css("height","auto");
		$(".container > .row").css("padding-bottom","20px");
		$(".card-body > img").css("width","23vh");
		$(".card-body > img").css("height","183px");
		$(".card-body").css("text-align","center")
		$(".card-body > .btn").css("position","sticky");
		$(".card-body > .btn").css("top","99%");
		$(".card-body > .btn").css("margin","7% 0");
		$(".card-body > .card-text").css("margin-top","2vh");
		$(".card-text").css("overflow","auto");
		$(".card-text").css("height","20%");
	}
}
export default Example;