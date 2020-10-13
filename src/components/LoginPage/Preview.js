import React from 'react';
import Cancel from './Cancel';
import Devices from './Devices';
import Price from './Price';

function Preview(props){
	if(props.tab==='cancel'){
		return <Cancel />
	}else if(props.tab==='devices'){
		return <Devices />
	}else if(props.tab==='price'){
		return <Price />
	}
}

export default Preview;