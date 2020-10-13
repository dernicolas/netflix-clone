import React from 'react';
import Title from './Title';


function SearchResults(props){
	return(
		<div>
			{
				props.titles.map((title,index)=>{
					return <Title
										title={title}
										key={index}
										id={index}
										onSelect={props.handleTitleSelect}
										selected={props.selected}
										onAddToList={props.onAddToList}
									/>
				})
			}
		</div>
		)
}

export default SearchResults;