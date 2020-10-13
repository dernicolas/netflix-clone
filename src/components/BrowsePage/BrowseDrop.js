import React from 'react';

function BrowseDrop(props){
	const styles={
		zIndex:'1',
		position:'fixed',
		top:'80px',
		left:'150px',
		backgroundColor:'rgba(0,0,0,0.9)',
		padding:'20px 40px',
		borderTop:'2px solid white'
	}
	const carrot={
		position:'relative',
		top:'-35px'
	}
	return(
		<div onMouseEnter={()=>props.hoverSelect('browse')} onMouseLeave={()=>props.hoverSelect(null)} style={styles}>
			<i style={carrot} className="fas fa-caret-up"></i>
			<div className='drop-item'>Home</div>
			<div className='drop-item'>TV Shows</div>
			<div className='drop-item'>Movies</div>
			<div className='drop-item'>Recently Added</div>
			<div className='drop-item'>My List</div>
		</div>
		)
}

export default BrowseDrop;