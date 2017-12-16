import React from 'react';

export default class AvesForm extends React.Component{
	state = {
    nombreAveComun: '',
    nombreAveCientifico:''
  }

  handleSubmit(e){
    e.preventDefault();
		this.handleRequest();
  }
 
  handleRequest(){
  	fetch('http://localhost:8080/AvesProject/resources/bird',{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(json => {console.log(json)})
  }

  onChangeInput(e){
    const target = e.target;
    const name = target.name;
    this.setState({[name]: target.value});
  }

	render(){
		return(
			<div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
          <div className="panel panel-default margin-top custom-panel">
            <div className="panel-body custom-panel-body">
              <form className="form-horizontal form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <div className="col-xs-8 col-xs-offset-2">
                    <input type="text" 
                      className="form-control"
                      placeholder="Nombre Común"
                      name="nombreAveComun"
                      value={this.state.nombreAveComun}
                      onChange={this.onChangeInput.bind(this)}
                      required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-8 col-xs-offset-2">
                    <input type="text" 
                      className="form-control"
                      placeholder="Nombre Ave Cientifico"
                      name="nombreAveCientifico"
                      value={this.state.nombreAveCientifico}
                      onChange={this.onChangeInput.bind(this)}
                      required />
                  </div>
                </div>
                <div className="text-center button-form-container row">
                  <button 
                    className="btn btn-success btn-primary col-md-4 col-md-offset-4"
                  >Agregar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
		);
	}
}