import React, {Component, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import $ from 'jquery';
import koder2 from '../img/koder2.png';
import '@fortawesome/fontawesome-free';
import Access from '../layout/access.js';
import Cookies from 'universal-cookie';
import Create from './products.create';
import axios from 'axios';
import Card from '../layout/card.js';
import Positioning from './positioning';
import { Link } from 'react-router-dom';

export class Home extends Component{
	constructor(props) {
		super(props);
		this.cookies = new Cookies();
		this.Style()
		
	}
	async componentDidMount() {
		this.Style()
		this.getData()
	}
	async componentDidUpdate(){
		this.Style()
		this.getData()
	}
	state = {
		data: []
	}
	getData = async() =>{
		const res = await axios.get('http://localhost:8000/products');
		this.setState({data: res.data});
	}
	render(){
		if(this.state.data == 0){
			return(
				<div className="container">
					<div className="err">
						<img src={koder2} className="logo"/>
						<h2 className="m-4">NOT FOUND</h2>
					</div>
					<span class="material-icons add" onClick={this.product}>add_circle</span>
				</div>
			);
	    }
		else{
            return(
			   <>	
			   <div className="filter">
				   <Positioning/>
			   </div>
			     <div className="containe">
			        <div className="row d-flex cont">
					{
			        		this.state.data.map(e=>(
			        			<Card title={e.name} description={e.description} imgURI={e.imgURI} author={e.author} price={e.price} arrayimg={e.arrayImg}/>
			        		))
			        }
			        </div>
					<Link to="/create" className="material-icons add">add_circle</Link>
		         </div>
			   </>
		   );		
	}
		   
	}
	Style = () =>{
		if(this.state.data == 0){
			$("body").css("background","#d9e3f1");
			$(".err").css("position","fixed");
			$(".panel > .container > .err").css("left","40%");
			$(".panel > .container > .err").css("top","40vh");
			$(".main > .panel").css("height","100%");
			$(".panel > .container > .err > .logo").css("border-radius","50%");
			$(".panel > .container > .err > .logo").css("width","80%");
			$(".panel > .container > .err > .logo").css("height","30vh");
			$(".panel > .container > .err > .logo").css("opacity",".9");
			$(".add").css("position","fixed");
			$(".add").css("top","88vh");
			$(".add").css("font-size","10vh");
			$(".add").css("color","#464850");
			$(".add").css("cursor","pointer");
			$(".add").css("left","93%");
		}
		else{
			$(".panel").css("height","auto");
			$("body").css("background","#BBB");
			$(".containe").css("height","100%");
			$(".cont").css("position","static")
			$(".cont").css("height","90%");
			$(".containe > .row").css("padding-bottom","20px");
			$(".containe").css("height","auto");
			$(".cont").css("justify-content","flex-start");
			$(".cont").css("width","100%");
			$(".cont").css("flex-wrap","wrap");
			$(".add").css("position","relative");
			$(".add").css("left","93%");
			$(".add").css("bottom","2vh");
			$(".add").css("top","0");
			$(".add").css("font-size","10vh");
			$(".add").css("color","#464850");
			$(".add").css("cursor","pointer");
		}
		$(".row").css("position","static");	
	}
	product = () =>{
		$("#root").append(`<div class="login"></div>`);
		$(".login").css("position","absolute");
		$(".login").css("position","absolute");
		$(".login").css("left","37%");
		$(".login").css("top","20%");
	if(this.cookies.get("name") == undefined && this.cookies.get("email") == undefined){
		return(
			ReactDOM.render(
			<Access/>, document.querySelector(".login")
			)
		)
	}
	else{
		$(".login").css("top","10%");
		$(".login").css("left","8%");
		return(
			ReactDOM.render(
			  <Create/>,
			document.querySelector(".login")
			)
		)
	}
	}
}