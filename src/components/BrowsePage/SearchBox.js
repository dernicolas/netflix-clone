import React from 'react';

function SearchBox(props){
	const openBox={
		transform:props.searchOpen?'translateX(0)':'translateX(200px)',
		backgroundColor:props.searchOpen? 'black' : 'transparent',
		border:props.searchOpen? '1px solid white' : 'none',
		padding:'9.5px'
	}
	const searchBox={
		width:'200px',
		transform:props.searchOpen?'translateX(0)':'translateX(200px)',
		backgroundColor:'black',
		color:'white',
		border:'1px solid white',
		padding:'10px'
	}
	return (
		<div style={{overflow:'hidden', display:'flex', alignItems:'center'}}>
			<i onClick={props.onSearchOpen} style={openBox} className="fas fa-search search-animation"></i>
			<input 
				className="search-animation" 
				style={searchBox} 
				type='search' 
				placeholder='Search Titles'
				onChange={props.onSearchChange} />
		</div>
		)
}

export default SearchBox;