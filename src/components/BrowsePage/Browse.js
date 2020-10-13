import React, { Component } from 'react';
import './browse.css';
import Navbar from './Navbar';
import HeroTitle from './HeroTitle';
import BrowseDrop from './BrowseDrop';
import TitleRow from './TitleRow';
import SearchResults from './SearchResults';

import titles from './mockData';


	class Browse extends Component{
	constructor(props){
		super(props);
		this.state={
			top:true,
			navSelected:null,
			myList:[],
			selectedIndex:null,
			searchOpen:false,
			searchText:''
		}
		this.checkIfTop=this.checkIfTop.bind(this);
		this.hoverSelect=this.hoverSelect.bind(this);
		this.handleAddToList=this.handleAddToList.bind(this);
		this.searchTitleResults=this.searchTitleResults.bind(this);
		this.handleTitleSelect=this.handleTitleSelect.bind(this);
		this.handleSearchOpen=this.handleSearchOpen.bind(this);

	}

	componentDidMount(){
		window.addEventListener('scroll', this.checkIfTop);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.checkIfTop);
	}

	checkIfTop(){
		if(window.scrollY === 0){
			this.setState({top:true})
		} else {
			this.setState({top:false})
		}
	}

	hoverSelect(name){
		this.setState({navSelected:name});
	}

	handleSearchOpen(){
		this.state.searchOpen ? this.setState({searchOpen:false}) : this.setState({searchOpen:true})
	}

	filterTitles(category,subCategory){
		return titles.filter(title=>title[category]===subCategory)
	}

	searchTitleResults(){
		return titles.filter(title=>title.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
	}

	handleSearchChange=(event)=>{
		this.setState({searchText:event.target.value})
	}

	handleAddToList(title){
		let currentList=this.state.myList.slice();
		if(!this.state.myList.includes(title)){
			currentList.unshift(title);
		}
		this.setState({myList:currentList});
	}
	handleTitleSelect(id){
		this.setState({selectedIndex:id});
	}

	render(){

	return(
		<div>
			<Navbar 
				top={this.state.top} 
				hoverSelect={this.hoverSelect} 
				searchOpen={this.state.searchOpen}
				onSearchOpen={this.handleSearchOpen}
				onSearchChange={this.handleSearchChange} />
			{
				this.state.navSelected==='browse'? <BrowseDrop hoverSelect={this.hoverSelect} /> : null
			}
			<HeroTitle />
			{ this.state.searchText ? 
				<SearchResults 
					titles={this.searchTitleResults()} 
					selected={this.state.selectedIndex}
					handleTitleSelect={this.handleTitleSelect}  /> :
				<div>
					<TitleRow 
						header='My List' 
						titles={this.state.myList}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} />
					<TitleRow 
						header='New Releases' 
						titles={this.filterTitles('newRelease',true)}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} />
					<TitleRow 
						header='Documentaries' 
						titles={this.filterTitles('genre','Documentary')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} />
					<TitleRow 
						header='Action' 
						titles={this.filterTitles('genre','Action')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} />
					<TitleRow 
						header='Comedy' 
						titles={this.filterTitles('genre','Comedy')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} />
					<TitleRow 
						header='Horror' 
						titles={this.filterTitles('genre','Horror')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} />
					<TitleRow 
						header='TV' 
						titles={this.filterTitles('type','TV')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} />
					<TitleRow 
						header='Movies' 
						titles={this.filterTitles('type','Movie')}
						onAddToList={this.handleAddToList}
						selected={this.state.selectedIndex}
						handleTitleSelect={this.handleTitleSelect} />
				</div>
			} 
			
		</div>
	)
	}
}

export default Browse;