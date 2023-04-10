import React, {Component, useState} from 'react';
import ReactDOM, { render } from 'react-dom';
import $ from 'jquery';
import masterCard from '../img/mastercard.jpg';
import paypal from '../img/paypal.png';
import nequi from '../img/nequi.jpg';
import efecty from '../img/Efecty.jpg';
import axios from 'axios';
import Pay from './pay.js';
import Cookies from 'universal-cookie';

export default class EditAdvance extends Component {
	constructor(props) {
		super(props);
		this.price = 300;
		this.name = "";
		this.cookie = new Cookies();
		this.id = 0;
	}
	componentDidMount() {
		this.Style()
		this.getData()
	}
	state = {
		number: 0,
		ID: '',
		data: [],
		name: '',
	};
	getData = async() =>{
		const res = await axios.get('http://localhost:8000/users');
		this.setState({data: res.data});
	}
	onChangeNumber = (e) =>{
		this.setState({number: e.target.value});
		console.log(this.state.number);
	}
	onChangeID = (e) =>{
		this.setState({ID: e.target.value});
	}
	render(){
		this.name = this.props.author;
		return (
			<div className="container data-container">
				<div class="card bg-primary">
				<h5 class="card-header bg-dark">Modified Advanced</h5>
				<div class="card-body">
				<form>
					<legend className="text-light">add information about us</legend>
					<div class="mb-3">
					<label for="disabledTextInput" class="form-label text-light">number for whatsapp</label><br/>
					<input type="tel" id="phone" class="form-control" onChange={this.onChangeNumber} name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required style={{width: "20%"}}/>
					</div>
					<div className="pay mb-4">
						<label className="text-light mb-3">ID of Stripe</label>
						<div className="d-flex justify-content-between align-content-center">
							<input type="text" className="form-control" style={{width: "40%"}} onChange={this.onChangeID} />
							<a className="text-light" target="_blank" href="https://dashboard.stripe.com/">Stripe login o sing up</a>
						</div>
					</div>
					<textarea className="form-control mt-2" id="w3review" name="w3review" rows="4" cols="50">Write more information valuable</textarea>
				<footer className="foot d-flex justify-content-center">
					<button class="btn btn-primary" id="intro_input" onClick={()=>this.submitInfo(this.props.name,this.props.email,this.props.imageUrl,this.props.render)}>Accept</button>
				</footer>
				</form>
				</div>
				</div>
			</div>
		);
	}
	submitInfo = (name,email,imageUrl,render) =>{
		let pos, i = 0;
		let b = 'F';
		console.log(this.state.number);
		this.id = this.state.data.filter(e=>{
			if(e.name == name) 
			   return e;
	 });

		while(i < this.state.data.length){
			if(this.state.data[i].name == name){
				pos = i;
				b = 'V';
			}
			i++;
		}
		if(b == 'V'){
			alert("logged in");
			axios.put('http://localhost:8000/users/'+this.id[0]._id,{
			   number: this.state.number,
			   idpay: this.state.ID
		    });
		}
		else{
			axios.post('http://localhost:8000/users',{
				"name": name,
				"email": email,
				"imageurl": imageUrl,
				"number": this.state.number,
				"idpay": this.state.ID
	        });
			
		}
		this.cookie.set('idpay', this.state.ID);
		this.cookie.set("name", name, { path: '/' });
		this.cookie.set("email", email, { path: '/' });
		this.cookie.set("imageurl", imageUrl, { path: '/' });
		$(".acces").remove();
		console.log(render);
		if(render){
			window.location.reload();
		}
	}
	Style = () =>{
		$(".modified").remove()
		$(".foot").css("position","sticky");
		$(".foot").css("top","90%");
		$("form").css("height","100%");
		$(".itempay").css("width","16%");
		$(".itempay").css("height","80px");
		$(".itempay").css("cursor","pointer");
		
		if($(".acces").parent().attr("class") == "panel"){
			$(".acces").css("position","relative");
			$(".acces").css("top","9%");
			$(".acces").css("left","0%");
			$(".acces").css("width","70%")
			$(".acces").css("height","auto")
			$(".acces").css("background","none")
			$(".acces").parent().on("click",()=>{
				$(".acces").remove();
			})
		}
		else{
			$(".acces").parent().css("top","9%");
			$(".acces").parent().css("left","4%");
			$(".acces").parent().css("width","90%")
			$(".acces").parent().css("height","auto")
			$(".acces").css("background","none")
			$(".acces").css("width","100%");
		}
		
	}
}