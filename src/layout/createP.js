import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import fs from 'fs';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast, Toaster } from 'react-hot-toast';
import { publicEncrypt } from 'crypto';
import Access from './access.js';

export default class CreateP extends Component{
	constructor(props){
		super(props);
		this.cookies = new Cookies();
		this.fileElem = document.getElementById("img");
		this.urlSelect = document.getElementById("urlSelect");
		this.cloudName = 'demo';
        this.unsignedUploadPreset = 'doc_codepen_example';
		global.uri = "";
		this.product = "product";
	}
	componentDidMount(){
		this.Style();
		this.getData();
	}
	componentDidUpdate(){
		this.Style();
	}
	state = {
		imgURI: "",
		name: "",
		description: "",
		price: 0,
		data: [],
		category: ""
	}
	getData = async() =>{
		const res = await axios.get('http://localhost:8000/products');
		this.setState({data: res.data});
	}
	onChangeName = (e) =>{
		this.setState({"name": e.target.value});
	}
	onChangeDescription = (e) =>{
		this.setState({"description": e.target.value});
	}
    onChangePrice = (e) =>{
		this.setState({"price": e.target.value});
	}
	onChangeCategory = (e) =>{
		this.setState({"category": e.target.value});
	}
	Submit = async(create,title,description,imgURI,price) =>{
		console.log(title);
		let id;
		if(this.state.category == ""){
			this.state.category = $(".category").val();
		}
		if(create == true)
			if(this.state.name != "" && this.state.description != ""){
				await axios.post('http://localhost:8000/products',{
				name: this.state.name,
				description: this.state.description,
				imgURI: localStorage.getItem("urichoose_file"),
				author: this.cookies.get("name"),
				price: parseFloat(this.state.price).toFixed(2),
				category: this.state.category,
				arrayImg: [localStorage.getItem("urichoose_file2"),localStorage.getItem("urichoose_file3"),localStorage.getItem("urichoose_file4")]
				});
				this.product = "Product Created";
			}
			else
				alert("Fill in all the fields");
		
		else{
				id = this.state.data.filter(e=>{
					if(e.name == title)
					return e;
				})
				await axios.put('http://localhost:8000/products/'+id[0]._id,{
				name: this.state.name,
				description: this.state.description,
				imgURI: localStorage.getItem("urichoose_file"),
				author: this.cookies.get("name"),
				price: parseFloat(this.state.price).toFixed(2), 
				category: this.state.category,
				arrayImg: [localStorage.getItem("urichoose_file2"),localStorage.getItem("urichoose_file3"),localStorage.getItem("urichoose_file4")]
				})
				this.product = "Modified Product";
		}
		  this.setState({"name": ''});
		  this.setState({"description": ''});
		  $("#imgs").remove();
		  this.setState({"price": ''});
		  alert($(".category").val())
		  localStorage.clear()
	}

	PanelCreateProduct = () =>{
		return(
			<div className="container">
			  <div className="card create p-5" style={{boxShadow: "none"}}>
				<div className="file d-flex" style={{flexFlow: "column"}}>
					<section className="files" style={{flexFlow: "column"}}>
						<section className="maincr">
							<input type="file" name="choose_file" id="choose_file" className='inputfile' onChange={(e)=>this.load(".maincr",e)}/>
						</section>
						<label for="choose_file"><span class="material-icons adds">add_circle</span></label>
						<section>
							<h5 className='card-text mb-4 text-dark'>more images this product</h5>
							<div className="card bg-dark mt-2 d-flex w-100" style={{flexFlow: "row", height: "16vh"}}>
							   <button className='card space1' style={{width: "33.5%", borderRadius: 0, cursor: "pointer"}}><input type="file" name="choose_file" id="choose_file2" className='inputfile' onChange={(e)=>this.load(".space1",e)}/><label className='text-dark w-100 h1 h-100' style={{textAlign: "center", margin: "20% 0"}} for="choose_file2">+</label></button>
							   <button className='card space2' style={{width: "33.5%", borderRadius: 0, cursor: "pointer"}}><input type="file" name="choose_file" id="choose_file3" className='inputfile' onChange={(e)=>this.load(".space2",e)}/><label className='text-dark w-100 h1 h-100' style={{textAlign: "center", margin: "20% 0"}} for="choose_file3">+</label></button>
							   <button className='card space3' style={{width: "33.5%", borderRadius: 0, cursor: "pointer"}}><input type="file" name="choose_file" id="choose_file4" className='inputfile' onChange={(e)=>this.load(".space3",e)}/><label className='text-dark w-100 h1 h-100' style={{textAlign: "center", margin: "20% 0"}} for="choose_file4">+</label></button>
						    </div>
						</section>
					</section>
				</div>
				<div className="card-body d-flex m-1" style={{padding: "0 !important"}}>
				<form>
					<div class="mb-5 mt-2">
						<label for="exampleInputEmail1" className="form-label text-dark">product title</label>
						<input type="email" className="form-control cyan" id="name" aria-describedby="emailHelp" onChange={this.onChangeName} value={this.state.name}/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" className="form-label text-dark">product description</label>
						<input type="text" className="form-control cyan" id="description" onChange={this.onChangeDescription} value={this.state.description}/>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" className="form-label text-dark">product price</label>
						<input type="number" className="form-control cyan" id="description" onChange={this.onChangePrice} value={this.state.price}/>
					</div>
					<div className="mb-3">
						<label className="form-label">select the category of your product</label>
						<select name="category" className='m-2 category form-select' aria-label='Default select category' onChange={this.onChangeCategory} value={this.state.category}>
						    <option value="Foot">Foot</option>
							<option value="Tecnology">Tecnology</option>
							<option value="Clothes">Clothes</option>
							<option value="Tools">Tools</option>
							<option value="Pharmaceutical">Pharmaceutical</option>
						    <option value="Paraphernalia">Paraphernalia</option>
							<option value="Software">Software</option>
							<option value="Car hire">Car hire</option>
							<option value="Children">Children</option>
							<option value="Construction">Construction</option>
						</select>
					</div>
					<button className="btn btn-primary cyan" onClick={(e)=>{this.Submit(this.props.create, this.props.title); toast.success(this.product)}} style={{width: "40%"}}><i className="fa-solid fa-plus"></i></button>
					</form>
				</div>
				</div>
		  </div>
		);
	}
	render(){
		if(this.cookies.get("name") == null && this.cookies.get("email") == null){
			$(".login").css("margin","0 1% 0 20%");
			return(
				<Access />
			);			
		}
		else{
			return(
				<this.PanelCreateProduct/>
			)
		}
	}
	Style = () =>{
		$("body").css("background","#FFF");
		$(".login").css("width","90%");
		$(".login > .container").css("width","100%");
		$(".create").css("display","flex");
		$(".create").css("flex-flow","row");
		$(".create").css("height","auto");
		$(".create").css("width","100%");
		$(".create > .card-body").css("flex-flow","column");
		$(".create > .card-body > form").css("padding","0px");
		$(".create > .card-body > input").css("height","6vh");
		$(".create").css("background","#FFF");
		$(".create > .btn").css("width","20%");
		$(".create > .btn").css("position","relative");
		$(".create > .btn").css("left","40%");
		$(".modified").one("dblclick",(e)=>{
			$(".modified").remove()
		})
		$(".login").css("width", "60%");
	}

	download(filename, text) { 
		var pom = document.createElement('a');
		pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		if (document.createEvent) { 
			var event = document.createEvent('MouseEvents');
			event.initEvent('click', true, true); 
			pom.dispatchEvent(event); 
			} 
			else {
				pom.click();
			} 
			console.log(pom.getAttribute("href"))
		 }
		 click = (e) =>{
			this.fileElem.click();
		    this.uploadFile('https://res.cloudinary.com/demo/image/upload/sample.jpg')
		    e.preventDefault();
		 }
		 uploadFile = (file,sub) =>{
			var url = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
			var xhr = new XMLHttpRequest();
			var fd = new FormData();
			xhr.open('POST', url, true);
			xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			xhr.onreadystatechange = function(e){
				 var response = JSON.parse(xhr.responseText)
			     global.url1 = response.secure_url;
				 console.log(sub);
			     localStorage.setItem(`uri${sub}`,global.url1);
			}
			fd.append('upload_preset', this.unsignedUploadPreset);
			fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
			fd.append('file', file);
			xhr.send(fd);
		}
		  load = (container,imp) => {
			  let img1 = document.getElementById(imp.target.id);
			  console.log(img1.getAttribute("id"))
			  for (var i = 0; i < img1.files.length; i++) {
				  if(img1.getAttribute("id") == "choose_file")
				     this.uploadFile(img1.files[i],"choose_file");
				  else if(img1.getAttribute("id") == "choose_file2")
				      this.uploadFile(img1.files[i],"choose_file2");
				  else if(img1.getAttribute("id") == "choose_file3")
				      this.uploadFile(img1.files[i],"choose_file3");
				  else if(img1.getAttribute("id") == "choose_file4")
				      this.uploadFile(img1.files[i],"choose_file4");
		      }
			  ReactDOM.render(
				  <img src={URL.createObjectURL(img1.files[0])} style={{width: "100%", height: "100%"}}/>,
				  document.querySelector(container)
			  );
			  $("#imgp").css("width","100%");
			  $("#imgp").css("height","100%");
		}
}