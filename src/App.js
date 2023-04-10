import './App.css';
import React, {useEffect} from 'react';
import $ from 'jquery';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { Home } from './components/home.js';
import Example from './components/example.js';
import { Navigation } from './components/navigation.js';
import { About } from './components/about.js';
import { Creations } from './components/creations.js';
import {Toaster} from 'react-hot-toast';
import Categories from './components/categories.js';
import CreateP from './layout/createP';

function App() {
  useEffect(()=>{
    if(window.screen.width <= 600){
      $(".part").removeClass("row");
      $(".part").addClass("column");
      $(".part > .card").css("width","100%");
      $(".panel > .container").attr("style","padding: 0 !important");
      $(".part > .card > .img > img").attr("style","width: 70px");
      $(".part > .card > .img > img").css("height","10vh");
      $(".part > .card > .img").attr("style","padding: 3%");
      $(".navbar > .container-fluid").addClass("bg-primary");
      $(".navbar > .container-fluid").css("padding-bottom","20px");
      $(".add").remove();
    }
  })
  return(
    <BrowserRouter>
    <div className="main">
      <Navigation/>
      <div className="panel">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/create' element={<><CreateP create={true}/> <Toaster position="top-center" reverseOrder={false}/></>}/>
          <Route path="/creations" element={<Creations/>}/>
          <Route path='/edit' element={<CreateP create={false} title={localStorage.getItem("title")}/>}/>
          <Route path="/examples" element={<Example/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/*/tecnology" element={<Categories cat="tecnology"/>}/>
          <Route path="/*/foot" element={<Categories cat="foot"/>}/>
          <Route path="/*/clothes" element={<Categories cat="clothes"/>}/>
          <Route path="/*/tools" element={<Categories cat="tools"/>}/>
          <Route path="/*/paraphernalia" element={<Categories cat="pharmaceutical"/>}/>
          <Route path="/*/pharmaceutical" element={<Categories cat="pharmaceutical"/>}/>
          <Route path="/*/software" element={<Categories cat="software"/>}/>
          <Route path="/*/carhire" element={<Categories cat="carhire"/>}/>
          <Route path="/*/children" element={<Categories cat="children"/>}/>
          <Route path="/*/constructor" element={<Categories cat="contructor"/>}/>
        </Routes>
      </div>  
    </div>
    </BrowserRouter>
  );
}
$("html").css("height", "auto");
$("body").css("height", "auto");
$("#root").css("height","100%");
$(".main").css("height", "100%");

export default App;
