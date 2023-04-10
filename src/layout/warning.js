import React from 'react';
import ReactDOM from 'react-dom';
import warnings from '../img/warning.ico';
import $ from 'jquery';

class Warning extends React.Component {
	componentDidMount(){
		$(".warn").css("position", "fixed");
		$(".warn").css("left","40%");
		$(".warn").css("top","20%");
		$(".warn").css("height","65%");
		$(".warn").css("width","25%");
		$(".warn > img").css("width","30%");
		$(".warn > img").css("height","20%");
		$(".warn > img").css("position","sticky");
		$(".warn > img").css("left","48%");
		$(".warn > img").css("margin","5% 0");
		$(".acept").css("width","100%");
		$(".acept").css("margin","20% 0");
		$(".acept").on("click",function(){
			$(".adv").remove();
		})
		$("#check").on("click",function(){
			var condiciones = $("#check").is(":checked");
			if (condiciones) {
              $(".adv > .card").css("visibility","hidden");
        }})   
	}
	componentWillUpdate(){
		$("#check").on("click",function(){
			var condiciones = $("#check").is(":checked");
			if (condiciones) {
			  $(".adv").remove();
              $(".adv > .card").css("visibility","hidden");
        }})
	}
	check = (props) =>{
		return(
			<div className="d-flex  align-items-baseline">
				<input id="check" type="checkbox" name="gender" value="1" />
				<h6 className="text-dark">do not show again</h6>
			</div>
		)
	}
	render() {
		return (
			<div class="card warn bg-warning" style={{width: '18rem'}}>
				<img src={warnings} class="card-img-top" alt="warning"/>
				<div class="card-body">
					<p class="card-text">{this.props.adv}</p>
					<this.check/>
					<a href="#" class="btn btn-warning acept">Accept</a>
				</div>
			</div>
		)
	}
}
export default Warning;