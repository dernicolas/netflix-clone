import React from 'react';
import tv from '../../img/login/TV.png';
import mobile from '../../img/login/mobile.png';
import web from '../../img/login/web.png';

function Devices(){
	const setWidth={
		width:'50vw',
		margin:'20px auto'
	}
	const img={
		width:'100%'
	}
	const title={
		fontWeight:'bold'
	}
	const grayText={
		color:'gray'
	}
	return (
		<div style={setWidth}>
			<p style={title}>Watch TV shows and movies anytime, anywhere — personalized for you.</p>
			<a className="button caps cta-btn">watch free for 30 days</a>
			<img style={img} src={tv} />
			<p style={title}>Watch on your TV</p>
			<p style={grayText}>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
			<img style={img} src={mobile} />
			<p style={title}>Watch instantly or download for later</p>
			<p style={grayText}>Available on phone and tablet, wherever you go.</p>
			<img style={img} src={web} />
			<p style={title}>Use any computer</p>
			<p style={grayText}>Watch right on Netflix.com.</p>
		</div>
		)
};

export default Devices;