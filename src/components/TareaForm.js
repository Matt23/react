import React, { Component } from 'react';

class TareaForm extends Component { 

	constructor() {
		super();
		this.state = {
			title: ''
		}

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e) {
		const {value, name} = e.target;
		this.setState({
				[name]: value
			}
		)
		console.log(e.target.value, e.target.name);
		console.log(this.state);	

	}

	handleSubmit(e) {
		e.preventDefault();	
		this.props.onAddTarea(this.state);
		alert(this.state);
	}

	render() {
		return (
			<div className="card text-dark">
				<form className="card-body text-dark" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input 
							type="text"
							name="title"
							onChange={this.handleInput}
							className="form-control"
							placeholder="Título"
						/>
						<input type="submit" name="submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default TareaForm;