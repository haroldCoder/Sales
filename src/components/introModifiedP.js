import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CreateP from '../layout/createP';
import EditAdvance from  './editAdvance.js'

export default class IntroModified extends Component {
	componentDidMount() {
		this.style();
	}
	render() {
		return (
			<div className="container">
				<div class="card card-dark bg-primary" style={{opacity: ".98"}}>
					<h5 class="card-header bg-secondary">Modified</h5>
					<div class="card-body">
						<h5 class="card-title text-light">choose an option</h5>
						<p class="card-text text-secondary">With supporting text below as a natural lead-in to additional content.</p>
						<div className='d-flex mt-5 justify-content-center'>
							<button class="btn btn-primary" onClick={()=>this.EditAdvance(this.props.title,this.props.price,this.props.author)}>Advance modification</button>
							<button class="btn btn-primary" onClick={(e)=>this.EditCard(e,this.props.title,this.props.arrayimg)}>modify card</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
	EditCard = (e,title,arrayimg) =>{
		$(".modified").remove();
		$("#root").append(`<div class="login"></div>`);
		$(".login").css("position","absolute");
		$(".login").css("top","10%");
		$(".login").css("left","8%");
		ReactDOM.render(
			<CreateP create={false} title={title} arrayimg={arrayimg}/>,
			document.querySelector(".login")
		);
		e.stopPropagation();
	}
	EditAdvance = (title,price,author) =>{
		$(".panel").append(`<div class="panelEA"></div>`);
		ReactDOM.render(
			<EditAdvance title={title} price={price} author={author} />,
			document.querySelector(".panelEA")
		);
	}
	style = () =>{
		$(".modified").css("position","absolute");
		$(".modified").css("top","15%");
		$(".modified").css("left","35%");
		$(".modified > .container > .card").css("width","80%");
		$(".modified > .container > .card").css("height","auto");
		$(".modified > .container > .card > .card-body > div > .btn").css("height","10%");
		$(".modified > .container > .card > .card-body > div > .btn").css("margin-right","10px");
		$(".modified").dblclick(function(){
			$(".modified").remove();
		})
	}
}

/*this.Edit(e,this.props.title,this.props.description,this.props.imgURI,this.props.price); Edit = (e,title) =>{
		
	}*/