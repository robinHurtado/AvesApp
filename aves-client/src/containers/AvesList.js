import React from 'react';
import EditAveForm from './EditAveForm';

export default class AvesList extends React.Component{
	state = {
		birds: []
	}

	componentWillMount(){
		fetch('http://localhost:8080/AvesProject/resources/birds',{
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => response.json())
    .then(json => {
    	this.setState({birds: json})
    });
	}

	render(){
		return(
			<div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
        	<h2 className="text-center">Lista de Aves</h2>
        	<ul className="list-group">
        		{
        			this.state.birds.map((birdObj) => (
        				<li className="list-group-item" 
        					style={{cursor:"pointer"}} 
        					key={birdObj.nombreComun}>
        					<b>Nombre Común:</b> {birdObj.nombreComun} <br />
        					<b>Nombre Cientifico:</b> {birdObj.nombreCientifico}
        				</li>
        			))
        		}
					</ul> 			
        </div>
      </div>  
		);
	}
}