import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import instagram from '../img/intagram.png';

export class About extends Component{
	constructor(props){
		super(props);
		this.social = [
			{
				"name": "Facebook",
				"icon": "https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-transparente.png?w=696&ssl=1",
				"link": "https://www.facebook.com/profile.php?id=100073088183904"
			},
			{
				"name": "Instagram",
				"icon": instagram,
				"link": "https://www.instagram.com/koder_alvarez/"
			},
			{
				"name": "Twitter",
				"icon": "https://play-lh.googleusercontent.com/tT_cdvQunsvESsJKAwiEUFUrTDak8foyjX_DLgp3BdNiBcPsh5ttjHcAE0QapZnmOYlr",
				"link": "https://mobile.twitter.com/Haroldc2005A"
			},
			{
				"name": "Gmail",
				"icon": "https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png",
				"link": "koderalvarez58@gmail.com"
			},
			{
				"name": "Git Hub",
				"icon": "https://miracomosehace.com/wp-content/uploads/2020/07/icono-de-github.jpg",
				"link": "https://github.com/haroldCoder"
			},
			{
				"name": "Linkedin",
				"icon": "http://www.jeronimoperez.com/wp-content/uploads/2014/11/logo-linkedin.jpg",
				"link": "https://www.linkedin.com/in/el-programador-skrt-816180216/"
			},
			{
				"name": "WhatsApp",
				"icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png",
				"link": "+573006397804"
			},
			{
				"name": "Briefcase Web",
				"icon": "https://w7.pngwing.com/pngs/60/327/png-transparent-globe-world-computer-icons-website-miscellaneous-text-logo.png",
				"link": "https://briefcase-coderx.herokuapp.com/"
			}
		];
	}
	componentDidMount(){
		this.Style()
	}
	panel = () =>{
		return(
			<div className="container">
				<div className="row part">
					{
						this.social.map(e=>(
						<div className="col-lg-4 d-flex card">
							<div className="img">
								<img src={e.icon} class="covers"/>
							</div>
							<section className="info">
								<div className="title">
									<h1>{e.name}</h1>
								</div>
								<a href={e.link} target="_blank">{e.link}</a>
							</section>
					   </div>
					   ))
					}
				</div>
			</div>
		);
	}
	render(){
		return(
			<this.panel/>
		);
	}
	Style = () =>{
		$("body").css("background","#d9e3f1");
		$(".covers").css("width","90%");
		$(".covers").css("height","90%");
		$(".row > .card").css("flex-flow","row");
		$(".row > .card").css("width","46%");
		$(".row > .card").css("height","14vh");
		$(".row > .card").css("margin","2% 2% 1% 2%");
		$(".row > .card").css("background","#001");
		$(".row > .card > .img").css("width","23%");
		$(".row > .card > .img").css("padding","2% 0%");
		$(".row > .card > .img > img").css("border-radius","5%");
		$(".row > .card > .img > img").css("height","100%");
		$(".row > .card > .img").css("border-right","3px solid #CCC");
		$(".row > .card > .info").css("margin","0 2%");
		$(".row > .card > .info").css("width","80%")
	}
}