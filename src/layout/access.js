import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import google from '../img/google.ico'
import Cookies from 'universal-cookie';
import {toast,Toaster} from 'react-hot-toast';
import axios from 'axios';
import App from '../App';
import EditAdvance from '../components/editAdvance';

class Access extends Component{
	constructor(props) {
		super(props);
		this.cookie = new Cookies();
	}
	state = {
		data: [],
		name: '',
		email: '',
		password: ''
	}
	componentDidMount() {
		$(".acces").css("background","#003d54");
		$(".acces").css("width","60vh");
		$(".acces").css("padding","auto")
		$(".acces").css("height","auto");
		$(".acces").css("padding","19px");
		$(".acces > form > footer > .btn-primary").css("width","100%");
		$(".acces > form > footer > .btn-primary").css("border-radius","20px");
		$(".acces > form > footer").css("position","sticky");
		$(".acces > form > footer").css("top","100%");
		$(".acces > form > footer > .btn-primary").css("height","46px");
		$(".acces > form > footer > .btn-primary").css("margin","5% 0 5% 0 ");
		$(".login").css("width","55vh");
		$(".login").css("padding","5px")
		$(".rem").css("position","sticky");
		$(".rem").css("left","100%");
		$(".rem").css("cursor","pointer");
		if($(".acces").parent().attr("class") != "panel"){
			$(".rem").on("click",function(){
				$(".login").remove();
				$(".log").remove();
			})			
		}
		else{
			$(".rem").remove()
		}
		this.getData()
	}
	getData = async() =>{
		const res = await axios.get('http://localhost:8000/users');
		this.setState({data: res.data});
	}
	onChangeName = (e) =>{
		this.setState({name: e.target.value});
	}
	onChangeEmail = (e) =>{
		this.setState({email: e.target.value});
	}
	onChangePassword = (e) =>{
		this.setState({password: e.target.value});
	}
    onSubmit = (e,render) =>{
		var pos, i = 0;
		var b = 'F';
		if(this.state.name != '' && this.state.email != '' && this.state.password != '')
			while(i < this.state.data.length){
				if(this.state.data[i].email == this.state.email){
				    pos = i;
					b = 'V';
				}
				i++;
			}
			if(b == 'V'){
				alert("logged in");
				this.cookie.set("name", this.state.name, { path: '/' });
			    this.cookie.set("email", this.state.email, { path: '/' });
			    this.cookie.set("imageurl", "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png", { path: '/' });
				$(".acces").remove();
			}
			else{
				ReactDOM.render(
					<EditAdvance name={this.state.name} email={this.state.email} imageUrl={"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"} render={render}/>,
				document.querySelector(".acces")
			    );
			}
		this.setState({name: ''});
		this.setState({email: ''});
		this.setState({password: ''});
		e.preventDefault()
	}
	render(){
		return (
		  <div className="acces container" style={{width: "100%"}}>
			<span className="material-icons rem">highlight_off</span>
		    <form>
			<div class="mb-3">
				<label for="exampleInputName1" class="form-label">Username</label>
				<input type="name" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" onChange={this.onChangeName} value={this.state.name}/>
			</div>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Email address</label>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.onChangeEmail} value={this.state.email}/>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Password</label>
				<input type="password" class="form-control" id="exampleInputPassword1" onChange={this.onChangePassword} value={this.state.password}/>
			</div>
			<footer>
			<button type="submit" onClick={(e)=>this.onSubmit(e,this.props.render)} class="btn-primary">LOGIN</button>
			<GoogleLogin
				clientId="709295496820-5vr1gvn7iskih8ccrjji5vc0ijq5pant.apps.googleusercontent.com"
				render={(renderProps) => (
				<button className="login" onClick={renderProps.onClick}
			    disabled={renderProps.disabled}><img src={google}/></button>
				)}
				buttonText="Login"
				onSuccess={(e)=>this.responseGoogle(e,this.props.render)}
				onFailure={(e)=>this.responseGoogle(e,this.props.render)}
				cookiePolicy={'single_host_origin'}
			/>
			<Toaster/>
			</footer>
			</form>
		  </div>
		);	
	}
	responseGoogle = (res,render) =>{
		let pos, i = 0;
		let b = 'F';

		while(i < this.state.data.length){
			if(this.state.data[i].name == res.profileObj.name){
				pos = i;
				b = 'V';
			}
			i++;
		}
		if(this.state.data[pos].name == res.profileObj.name){
			alert("logged in");
			this.cookie.set("name", res.profileObj.name, { path: '/' });
			this.cookie.set("email", res.profileObj.email, { path: '/' });
			this.cookie.set("imageurl", res.profileObj.imageUrl, { path: '/' });
		}
		else{
			ReactDOM.render(
					<EditAdvance name={res.profileObj.name} email={res.profileObj.email} imageUrl={res.profileObj.imageUrl} render={render}/>,
				document.querySelector(".acces")
			);
		}		
	}
}
export default Access;