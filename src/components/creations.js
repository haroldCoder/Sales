import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import $ from 'jquery';
import Cookies from 'universal-cookie';
import found from '../img/not found.png';
import axios from 'axios';
import Card from '../layout/card.js';
import Access from '../layout/access';
import { isThisTypeNode } from 'typescript';

export class Creations extends Component{
	constructor(props){
		super(props);
		this.cookies = new Cookies();
	}
	async componentDidMount(){
		this.getProductCreate();
		this.Style()
	}
	componentDidUpdate(){
		this.Style()
	}
	state = {
		data: [],
		fillauthors: [],
		inputname: ""
	};
	getProductCreate = async() =>{
		const res = await axios.get('http://localhost:8000/products');
		this.setState({data: res.data});
	}
	onChangeInputName = (e) =>{
		this.setState({inputname: e.target.value})
	}
	render(){
		this.getProductCreate()
			if(this.state.data == 0){
				return(
					<div className="container d-flex">
						<div className="info">
							<img src={found} alt="not found"/>
						</div>
					</div>
				);
			}	
			else{
				if(this.cookies.get("name") == null){
					return(
						<Access render={true}/>
					)						
				}
				else{
					return(
						<this.creations/>
					)
				}	
			}
	}
	creations = () =>{
		return(
				<div className="containe">
					<div className="row d-flex cont">
						{
							this.state.data.map(e=>(
								e.author == this.cookies.get("name") ? 
								<Card title={e.name} description={e.description} imgURI={e.imgURI} author={e.author} remove={true} price={e.price} arrayimg={e.arrayImg}/>:
								null		
							))
						}
					</div>	
				</div>			
		)
	}
	Style = () =>{
		if(this.state.data == 0){
			$("body").css("background","#d9e3f1");
			$(".panel > .container").css("width","100%");
			$(".panel > .container").css("justify-content","center");
			$(".panel > .container").css("padding","8%");
			$(".panel > .container > .info > img").css("border-radius","100%");
			$(".panel > .container > .info > img").css("width","500px");
			$(".panel > .container > .info > img").css("height","500px");
			$(".container").css("padding","30px 0 0 0");
		}
		else{
			$("body").css("background","#d9e3f1");
			$(".containe").css("padding"," 10px 0 0 0");
		    $(".containe > .row").css("height","100%");
			$(".cont").css("justify-content","flex-start");
			$(".cont").css("width","100%");
			$(".cont").css("flex-wrap","wrap");
		}
		   
 	}
}