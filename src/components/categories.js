import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Card from '../layout/card.js'
import Positioning from './positioning.js';

export default class Categories extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		data: []
	}
	componentDidMount() {
		this.getData();
	}
	getData = async() =>{
		const res = await axios.get('http://localhost:8000/products');
		this.setState({"data": res.data});
	}
	render(){
		switch(this.props.cat){
			case "foot":
				return (<this.Foot/>)
				break;
			case "tecnology":
				return (<this.Tecnology />)
				break;
			case "clothes":
				return (<this.Clothes />)
				break;
			case "tools":
				return (<this.Tools />)
				break;
			case "pharmaceutical":
				return (<this.Pharmaceutical />)
				break;
			case "paraphernalia":
				return (<this.Paraphernalia />)
				break;
		    case "software":
				return (<this.Software />)
				break;
			case "carhire":
				return (<this.Carhire />)
				break;
			case "construction":
				return (<this.Construction />)
				break;
		}
	   
	}
	Foot = () =>{
		return(
			<>
			<div className="containe">
			<Positioning params={"Foot"}/>
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Foot" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>			
			</>
		)
	}
	Tecnology = () =>{
		return(
			<>
			<div className="containe">
			<Positioning params={"Tecnology"}/>
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Tecnology" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>			
			</>
		)
    }
	Clothes = () =>{
		return(
			<div className="containe">
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Clothes" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>
		)
	}
	Tools = () =>{
		return(
			<div className="containe">
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Tools" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>
		)
	}
	Pharmaceutical = () =>{
		return(
			<div className="containe">
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Pharmaceutical" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>
		)
	}
	Paraphernalia = () =>{
		return(
			<div className="containe">
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Paraphernalia" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>
		)
	}
	Software = () =>{
		return(
			<div className="containe">
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Software" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>
		)
	}
	CarHire = () =>{
		return(
			<div className="containe">
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "CarHire" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>
		)
	}
	Children = () =>{
		return(
			<div className="containe">
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Children" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>
		)
	}
	Construction = () =>{
		return(
			<div className="containe">
			<div className="row cont">
			   {
				  this.state.data.map((e)=>
				    e.category == "Construction" ?
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
					: 
					 null
			      ) 
			   }
			</div>
			</div>
		)
	}
}