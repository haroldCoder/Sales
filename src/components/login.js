import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Cookies from 'universal-cookie';
import axios from 'axios';

class Login extends Component{
	constructor(props){
		super(props);
		this.cookie = new Cookies();
	}
	state = {
		data: [],
		number: 0
	}
	async componentDidMount(){
		this.style()
		this.getDataUsers()
	}
	async componentDidUpdate(){
		this.getDataUsers()
	}
	getDataUsers = async() =>{
		const res = await axios.get('http://localhost:8000/users');
		this.setState({data: res.data});

	}
	render() {
		let number = this.state.data.filter(e=>{
			if(e.name == this.cookie.get("name")){
				return e;
			}
		})
		console.log(this.cookie.get("name"));
		return(
			<div className="plogin d-flex container m-2 p-5">
				<i class="fa-solid fa-circle-xmark" style={{cursor: "pointer"}}></i>
				<img src={this.cookie.get("imageurl")}/>
				<section className="img d-flex justify-content-center">
					<h1>Profile</h1>
				</section>
				<section className="info" style={{textAlign: "left"}}>
					<h4 className="m-2 text-dark">{this.cookie.get("name")}</h4>
					<h4 className="m-2 text-dark">{this.cookie.get("email")}</h4>
					<div className="number d-flex">
						<i className="fab fa-whatsapp m-2" style={{fontSize: "40px"}}></i><h4 className="mt-3">{this.state.number}</h4>
					</div>
					
				</section>
				<footer className="d-flex justify-content-around">
				   <div className="icon">
					 <button className="btn-primary btnmenu" onClick={this.remove}><i class="fa-solid fa-trash-can"></i></button> 
				   </div>
				  <div className="icon">
					 <button className="btn-primary btnmenu" onClick={this.run}><i class="fa-solid fa-person-running"></i></button> 
				  </div>   
				</footer>
			</div>
		)
	}
	remove = () =>{
		let id = 0;
		this.state.data.map(e=>{
			if(e.name == this.cookie.get("name"))
			  id = e._id;
		});
		axios.delete('http://localhost:8000/users/'+id);
		this.cookie.remove("name");
		this.cookie.remove("email");
		this.cookie.remove("imageurl");
		
	}
	run = () =>{
		this.cookie.remove("name");
		this.cookie.remove("email");
		this.cookie.remove("imageurl");
		$(".login").remove()
	}
	style = () => {
		$(".login").css("width","60%");
		$(".login").css("background","#EEEEEE95");
		$(".login").css("backdrop-filter","blur(6px)");
		$(".login").css("box-shadow","4px 4px 4px 4px #BBB");
		$(".login").css("left","24%");
		$(".login").css("top","10%")
		$(".plogin").css("width","100%")
		$(".plogin").css("flex-flow", "column");
		$(".plogin > section").css("margin-top","4px");
		$(".plogin > img").css("width","9%");
		$(".plogin > img").css("height","10vh");
		$(".plogin > img").css("border-radius","100%");
		$(".plogin > img").css("position","absolute");
		$(".plogin > img").css("top","3%");
		$(".plogin > img").css("left","3%");
		$(".plogin").css("height","80vh")
		$(".plogin > .img > h1").css("font-family","'Oswald', sans-serif");
		$(".plogin").css("text-align","center");
		$(".plogin > footer").css("position","sticky");
		$(".plogin > footer").css("top","80%");
		$(".plogin > footer > .icon > i").css("font-size","35px");
		$(".plogin > footer > .icon > i").css("padding","15px");
		$(".plogin > footer > .icon").css("box-shadow","1px 1px 8px 8px #6e87cf");
		$(".plogin > i").css("font-size","40px");
		$(".plogin > i").css("position","absolute");
		$(".plogin > i").css("left","94%");
		$(".plogin > i").css("top","2%");
		$(".btnmenu").css("width","80px");
		$(".btnmenu").css("height","75px");
		$(".btnmenu > i").css("font-size","30px");
		$(".plogin > i").on("mouseover",()=>{
			$(".plogin > i").css("color","#309BFF");
		}).on("mouseout",()=>{
			$(".plogin > i").css("color","#7b8ab8");
		})
		$(".plogin > i").on("click",()=>{
			$(".login").remove();
		})
		$(".plogin > .info").css("margin-top","13%");
	}
}
export default Login;