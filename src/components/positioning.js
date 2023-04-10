import React, {Component, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import $, { param } from 'jquery';
import {Dropdown} from 'react-bootstrap';
import axios from 'axios';
import Card from '../layout/card';
import {Home} from './home';

class Positioning extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.getData();
		this.Style()
	}
	componentDidUpdate(){
		this.Style()
	}
	state = {
		data: []
	}
	getData = async() =>{
		const res = await axios.get("http://localhost:8000/products");
		this.setState({data: res.data});
	}
	render(){
		return (
			<Dropdown className="d-inline mx-2 fill">
			<Dropdown.Toggle className="text-white" id="dropdown-autoclose-true">
			<i class="fas fa-filter"></i>
			</Dropdown.Toggle>
		
			<Dropdown.Menu>
			<Dropdown.Item href="#" id="proec" onClick={()=>this.AlgoritmCheap(this.props.params)}>economical products (cheap)</Dropdown.Item>
			<Dropdown.Item href="#" id="proex" onClick={()=>this.AlgoritmExpensive(this.props.params)}>expensive products</Dropdown.Item>
			<Dropdown.Item href="#">most purchased products</Dropdown.Item>
			<Dropdown.Item href="#" onClick={()=>this.RealProducts(this.props.params)}>all products</Dropdown.Item>
		</Dropdown.Menu>
		</Dropdown>			
		)
	}
	AlgoritmExpensive = (params) =>{
		let fil;
		if(params == null){
			fil = this.state.data.map(e=>{
			   return e;
		    })
		}
		else{
			fil = this.state.data.filter(e=>{
				if(e.category == params)
				   return e;
			})
		}
		for(let i = 0; i<fil.length-1; i++){
			for(let j = 0; j<fil.length-i-1; j++){
				if(fil[j].price > fil[j+1].price){
					let temp = fil[j];
					fil[j] = fil[j+1];
					fil[j+1] = temp;
				}
			}
		}
		ReactDOM.render(
			<>
			<h2 className='mb-0 my-1 ml-1 p-2 bg-light text-primary' style={{textAlign: "center"}}>Products Expensives</h2>
			<Positioning params={params}/>
			<div className='row d-flex cont'>
			    {
			        fil.map(e=>(
			        	<Card title={e.name} description={e.description} imgURI={e.imgURI} author={e.author} price={e.price}/>
			        ))
			    }
			</div>			
			</>, document.querySelector(".containe")
		)
	}
	AlgoritmCheap = (params) =>{
		let fil;
		if(params == null){
			fil = this.state.data.map(e=>{
			   return e;
		    })
		}
		else{
			fil = this.state.data.filter(e=>{
				if(e.category == params)
				   return e;
			})
		}
		for(let i = 0; i<fil.length-1; i++){
			for(let j = 0; j<fil.length-i-1; j++){
				if(fil[j].price < fil[j+1].price){
					let temp = fil[j];
					fil[j] = fil[j+1];
					fil[j+1] = temp;
				}
			}
		}
		ReactDOM.render(
			<>
			<h2 className='mb-0 my-1 ml-1 p-2 bg-light text-primary' style={{textAlign: "center"}}>Products Cheaps</h2>
			<Positioning params={params}/>
			<div className='row d-flex cont'>
			    {
			        fil.map(e=>(
			        	<Card title={e.name} description={e.description} imgURI={e.imgURI} author={e.author} price={e.price}/>
			        ))
			    }
			</div>			
			</>, document.querySelector(".containe")
		)
	}
	RealProducts = (params) =>{
		let fil
		if(params == null){
			ReactDOM.render(
				<Home/>,
				document.querySelector(".panel")
			);			
		}
		else{
			fil = this.state.data.filter(e=>{
				if(e.category == params)
				   return e;
			})
			ReactDOM.render(
				<>
				<Positioning params={"Foot"}/>
			    <div className="row cont">
			    {
				  fil.map((e)=>
					<Card title={e.name} description={e.description} author={e.author} imgURI={e.imgURI} price={e.price}/>
			      ) 
			    }
			    </div>		
				</>, document.querySelector(".containe")
			)	
		}
	}
	Style = () =>{
		$(".fill").css("z-index","4")
		$(".fill").css("position","fixed");
		$(".fill").css("left","92%");
		$(".fill").css("top","12%");
		$(".fill > #dropdown-autoclose-true").css("border-radius","8px");
		$("#dropdown-autoclose-true").css("background","#388DFC99")
	}
}
export default Positioning;