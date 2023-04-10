import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

export default class Remove extends Component{
	componentDidMount(){
		this.getData();
		this.Style()
	}
	state = {
		data: []
	}
	getData = async() =>{
		const res = await axios.get('http://localhost:8000/products');
		this.setState({data: res.data});
	}
	remove = (title) =>{
		return(
			<div className='card rem'>
				<div className='card-title bg-secondary'>
					<h2 className='title text-center'>messagge</h2>
				</div>
				<div className='card-body mt-4'>
					<p className='card-text'>Are you sure you want to remove this product?</p>
				<footer className='d-flex justify-content-center mt-5'>
					<button className='btn-primary' onClick={()=>this.productRemove(title)} style={{padding: "4%",width: "130px",marginRight: "10px"}}>Accept</button>
					<button className='btn-primary' onClick={()=>$(".premove").remove()} style={{padding: "4%",width: "130px"}}>Cancel</button>
				</footer>
				</div>
			</div>
		);
	}
	render(){
		return(
			<this.remove name={this.props.title}/>
		);
	}
	productRemove = (title) =>{
		let id = this.state.data.filter(e=>{
			if(e.name == title.name)
			  return e;
		})
		console.log(id[0]._id)
		axios.delete('http://localhost:8000/products/'+id[0]._id);
		$(".premove").remove()
	}
	Style = () =>{
		$(".premove > .card").css("height","40vh");
		$(".premove > .card > .card-body").css("padding","2% 10%");
	}
}