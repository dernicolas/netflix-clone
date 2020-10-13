import React, { Component } from 'react';
import Hero from './Hero';
import IconBar from './IconBar';
import Preview from './Preview';

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			preview:'cancel'
		}
		this.changePreview=this.changePreview.bind(this);
	}

	changePreview(selected){
		this.setState({preview:selected});
		console.log(this.state);
	}

	render(){
		return (
		<div>
			<Hero />
			<IconBar currentTab={this.state.preview} changeTab={this.changePreview} />
			<Preview tab={this.state.preview} />
		</div>
		)
	}
}

export default Login;

