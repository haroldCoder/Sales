import React, { Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import $, { ajax } from 'jquery';
import CreateP from '../layout/createP';

class Create extends Component{
	render() {
		return ( 
		  <CreateP create={true}/>
		);
	}
}

export default Create;