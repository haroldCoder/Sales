import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MainCard from '../layout/mainCard.js';
import Remove from './remove.js';
import CreateP from './createP.js';
import {Toaster, toast} from 'react-hot-toast';
import { Link } from 'react-router-dom';

class Card extends Component{
	componentDidMount(){
		this.Style()
	}
	render(){
		return(
			<div class="card bg-white" onClick={(e)=>this.cardMain(e,this.props.title,this.props.author,this.props.imgURI,this.props.description,this.props.price,this.props.arrayimg)}>
               <div className="title">
                <h5 class="card-header">{this.props.title}<h5 className="mt-1 text-primary">{this.props.author}</h5></h5>
               </div>
			   {
				 this.props.remove ?
				 <div className='remove' onClick={this.remove} style={{cursor: "pointer"}}>
			       <i class="fas fa-trash-alt" style={{fontSize: "25px"}}></i>
			     </div>
				 : null
			   }
               <div class="card-body">
               	<img src={this.props.imgURI} style={{cursor: "pointer"}}/>
               	<p class="card-text">{this.props.description}</p>
               	<a href="#" class="btn btn-primary" id="buy">Buy</a>
				   {
					 this.props.remove ?
					 <button to='/edit' class="material-icons edit" onClick={e=>{this.Edit(e,this.props.title,this.props.description,this.props.imgURI,this.props.price,this.props.author,this.props.arrayimg)}}>edit</button>
					 : null
				   }
               </div>
           </div> 
		)
	}
    remove = (e) =>{
		$(".panel").append(`<div class="premove"></div>`);
		ReactDOM.render(
		    <Remove title={this.props.title} description={this.props.description} imgURI={this.props.imgURI} price={this.props.price} />,
			document.querySelector('.premove')
	   );
	   e.stopPropagation()
	   $(".premove").css("position","absolute");
	   $(".premove").css("top","23%");
	   $(".premove").css("left","40%"); 
	}
	Edit = (e, title, arrayimg) =>{
		$(".panel").append(`<div class="modified"></div> <Toaster position="top-center" reverseOrder={false}/>`); 
		$(".modified").css("position","absolute");
		$(".modified").css("top","10%");
		$(".modified").css("left","8%");
		$(".modified").css("width","85%")
		ReactDOM.render(
			<CreateP create={false} title={title} arrayimg={arrayimg}/>,
			 document.querySelector(".modified")
		)
		e.stopPropagation();
	}
	cardMain = (e,title,author,cover,description,price,array) =>{
		e.stopPropagation();
		$(".panel").append(`<div class="pmainc"></div>`);
		ReactDOM.render(
			<MainCard title={title} cover={cover} description={description} author={author} price={price} arrayimg={array}/>,
			document.querySelector(".pmainc")
		);
	}
	Style = () =>{     
		$(".card").css("height","82vh");  
		$(".text").css("height","15%");
		$(".card-body > img").css("width","auto");
		$(".card-body > img").css("height","40%");
		$(".card-body").css("text-align","center");
		$(".card-body").css("height","60%");
		$(".card-body > .btn").css("position","sticky");
		$(".card-body > .btn").css("top","99%");
		$(".card-body > .btn").css("margin","7% 0");
		$(".card-body > .card-text").css("margin-top","2vh");
		$(".card-text").css("overflow","auto");
		$(".card-text").css("height","30%");
		$(".remove").css("background","#eee");
		$(".remove").css("border-radius","100%");
		$(".remove").css("position","absolute");
		$(".remove").css("left","90%");
		$(".remove").css("top","5%");
		$(".edit").css("position","absolute");
		$(".edit").css("left","82%");
		$(".edit").css("top","86%");
		$(".edit").css("border-radius","50%");
		$(".edit").css("background","#c4d9f5");
		$(".edit").css("padding","3%");
		$(".containe > .row > .card").css("width","23.5%");
	}
}
export default Card;