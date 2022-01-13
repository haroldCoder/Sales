import React from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/home';
import {Toaster} from 'react-hot-toast';


function App() {
  return(
    <Router>
    <div className="main">
      <div className="panel">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      <Toaster position="top-center"
					reverseOrder={false}/>
    </div>
    </Router>
  );
}
$("html").css("height", "auto");
$("body").css("height", "auto");
$("#root").css("height","100%");
$(".main").css("height", "100%");

export default App;
