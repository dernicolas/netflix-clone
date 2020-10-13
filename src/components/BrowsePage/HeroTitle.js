import React from 'react';
import heroIMG from '../../img/browse/hero.webp';
import heroTitle from '../../img/browse/heroTitle.webp';

function HeroTitle(props){
	const background={
		position:'relative',
		backgroundImage:`url(${heroIMG})`,
		backgroundSize:'cover',
		height:'50vw',
		fontSize:'1.25vw'
	}
	const info={
		width:'30%',
		position:'absolute',
		left:'20px',
		bottom:'20px'
	}
	const synopsis={
		backgroundColor:'rgba(0,0,0,0.25)',
		padding:'10px'
	}

	return (
		<div style={background}>
			<div style={info}>
				<img style={{width:'100%'}} src={heroTitle}/>
				<div style={{display:'flex'}}>
					<div className='hover-icon'>
						<i className="fas fa-play"></i> Play
					</div>
					<div className='hover-icon' >
						<i className="fas fa-plus"></i> My List
					</div>
				</div>
				<div style={synopsis}>
					<p style={{fontWeight:'bold'}}>Watch Volume 1 Now</p>
					<p>Food, tradition, hopes and dreams. These aren't just street bites. They're dishes with heart, shaped by human stories.</p>
				</div>
			</div>
		</div>
		)
}

export default HeroTitle;