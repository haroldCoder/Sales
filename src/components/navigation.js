import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Link, Outlet, NavLink} from 'react-router-dom';
import Access from '../layout/access.js';
import Cookies from 'universal-cookie';
import Login from './login.js';
import Search from './search';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

export class Navigation extends Component{
	constructor(props){
		super(props);
		this.search = new Search();
	}
	componentDidMount(){
		this.Main()
		this.cookies  = new Cookies();
	}
	render(){
		return(
			<Navbar bg="primary" className="navbar navbar-expand-lg navbar-dark" expand="lg">
			<Container fluid>
				<Navbar.Brand className="text-light sales-brand" bg="light">SalesK</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
				<Nav
					className="me-auto my-2 my-lg-0"
					style={{ maxHeight: '100px' }}
					navbarScroll
				>
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
						<NavLink className="nav-link active" to="/">Home
							<span className="visually-hidden">(current)</span>
						</NavLink>
						</li>
						<li className="nav-item">
						<NavLink className="nav-link" to="/creations">Creations</NavLink>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/about">About</Link>
						</li>
						<Dropdown className="nav-item item1">
						<DropdownToggle id="btn-e" className="text-white nav-link dropdown-toggle tex-white" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products</DropdownToggle>
						<DropdownMenu className="dropdown-menu submenu1">
							<Link className="dropdown-item" id="onl" to="/">products online</Link>
							<Link className="dropdown-item" id="exa" to="/examples">product examples</Link>
						</DropdownMenu>
						</Dropdown>
						<Dropdown className="nav-item" id="item">
						<DropdownToggle id="btn-e" className="text-white nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category</DropdownToggle>
						<DropdownMenu className="dropdown-menu" id="submenu">
							<Link className="dropdown-item" to="/*/foot">Foot</Link>
							<Link className="dropdown-item" to="/*/tecnology">Tecnology</Link>
							<Link className="dropdown-item" to="/*/clothes">Clothes</Link>
							<Link className="dropdown-item" to="/*/tools">Tools</Link>
							<Link className="dropdown-item" to="/*/pharmaceutical">Pharmaceutical</Link>
						    <Link className="dropdown-item" to="/*/paraphernalia">Paraphernalia</Link>
							<Link className="dropdown-item" to="/*/software">Software</Link>
							<Link className="dropdown-item" to="/*/car hire">Car hire</Link>
							<Link className="dropdown-item" to="/*/children">Children</Link>
							<Link className="dropdown-item" to="/*/construction">Construction</Link>
						</DropdownMenu>
						</Dropdown>
						<Dropdown className="nav-item item3">
							<DropdownToggle id="btn-e" className=" text-white nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">settings</DropdownToggle>
							<DropdownMenu className="dropdown-menu submenu3">
								<p className="bg-secondary">mode</p>
								<button className="dropdown-item bg-dark" onClick={() =>{$("body").removeClass("bg-secondary"); $("body").addClass("bg-dark"); $(".card").removeClass("bg-white"); $(".card").addClass("bg-dark")}}>mode dark</button>
								<button className="dropdown-item bg-light" onClick={()=>{$("body").removeClass("bg-dark"); $("body").css("background","#d9e3f1");  $(".card").removeClass("bg-dark")}}>mode light</button>
							</DropdownMenu>
						</Dropdown>
					</ul>
				</Nav>
				<Outlet/>
				<span class="material-icons use" onClick={this.user}>account_circle</span>
				<Form className="d-flex">
					<FormControl
					type="search"
					className="me-2"
					aria-label="Search"
					placeholder="search by name"
					onChange={this.search.searchfor}
					/>
					<Button className="btn-secondary" onClick={this.search.submitData}>Search</Button>
				</Form>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		)
	}
	user = () => {
		   $("#root").append(`<div class="login"></div>`);
		   $(".login").css("position","absolute");
		   $(".login").css("left","37%");
		   $(".login").css("top","20%");
		if(this.cookies.get("name") == undefined && this.cookies.get("email") == undefined){
		    ReactDOM.render(
		   	     <Access/>, document.querySelector(".login")
		    );
		}
		else{
			ReactDOM.render(
				<Login/>, document.querySelector(".login")
			)
		}
	}
	Main = () =>{
		$(".use").css("cursor","pointer");
		$(".use").css("font-size","7vh");
		$(".use").css("color","#FFF");
		$(".use").css("margin-right","20px");
		$(".navbar").css("height","10.5vh");
		$(".sales-brand").css("font-size","27px");
		$(".navbar-nav > .nav-item").css("font-size","15px");
	}
}