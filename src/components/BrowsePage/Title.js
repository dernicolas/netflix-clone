import React from 'react';

function Title(props){
	const styles={
		display:'inline-block',
		width:'35vh',
		height:'20vh',
		marginRight:'1vw',
		backgroundImage:`url(${props.title.img})`,
		backgroundSize:'cover',
		transition:'transform 0.5s',
		position:'relative',
		zIndex:props.selected===props.id?'1':'0',
		transform:props.selected===props.id?'scale(1.5)':'scale(1)',
	}

	const infoStyle={
		position:'absolute',
		left:'0',
		bottom:'0',
		fontWeight:'bold',
		textAlign:'left',
		paddingLeft:'1vw'
	}


	let info=null;
		if(props.selected===props.id){
				info= 
				<div style={infoStyle}>
					<i style={{color:'#e50914'}} className="fas fa-play icon-circle"></i>
					<p>{props.title.name} <i onClick={()=>props.onAddToList(props.title)} className="fas fa-plus icon-circle"></i></p>
					<div style={infoStyle}>
						{props.title.tags.map((tag,index)=>{
							return <a key={index}>{tag}  </a>
						})}
					</div>
				</div>
			}

	return(
		<div onMouseOver={()=>props.onSelect(props.id)} onMouseLeave={()=>props.onSelect(null)} style={styles}>
			{info}
		</div>
		)
}

export default Title;