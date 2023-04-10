import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Card from '../layout/card';

class Search extends Component{
	constructor(props){
		super(props);
		this.search = '';
		this.data = [];
		this.searchf = [];
	}
	componentDidMount(){
		this.Style()
		if($(".window").length > 0){
			$(".containe").css("display","none");
		}
	}
	render(){
		return(
			<div className='container'>
			   <Card title={this.props.name} description={this.props.description} imgURI={this.props.imgURI} author={this.props.author} />
			</div>
		)
	}
	searchfor = async(e) =>{
	    const res = await axios.get('http://localhost:8000/products');
		this.data = res.data;
		this.search = e.target.value;
	}
	submitData = (e) =>{
		e.preventDefault();
		this.searchf = this.data.filter(e=>{
			if(e.name == this.search)
			  return e;
		})
		this.searchReturn();
	}
	searchReturn = () =>{
		$(".panel").append(`<div class="window"></div>`);
		ReactDOM.render(
			<Search name={this.searchf[0].name} description={this.searchf[0].description} imgURI={this.searchf[0].imgURI} author={this.searchf[0].author} />,
			document.querySelector('.window')
		);
		
	}
	Style = () =>{
		$(".container").css("padding","1% 25%");
		$(".window").css("position","absolute");
		$(".window").css("left","10%");
		$(".window").css("top","10%");
		$(".window > .container > .card").append(`<span class="material-icons close">cancel</span>`);
		$(".close").css("position","absolute");
		$(".close").css("left","93%");
		$(".close").css("top","2%");
		$(".close").css("cursor","pointer");
		$(".close").on("click",(e)=>{
			$(".window").remove();
			$(".containe").css("display","block");
			e.stopPropagation();
		})
	}
}
export default Search;