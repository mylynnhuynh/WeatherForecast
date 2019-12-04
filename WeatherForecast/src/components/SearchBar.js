import React from 'react';


class SearchBar extends React.Component{
	
	state = { city:'' };
	
	onFormSubmit = (event) =>{
		event.preventDefault();
		
		this.props.getWeather(this.state.city,'','');
	}
	
	onInputChange = (event) =>{
		this.setState( {city:event.target.value} );
	}
	
	render(){
		return(
			<div>
				<br></br>
				<form className="ui form" onSubmit={this.onFormSubmit}>
				<div>
					<div className="ui icon input">
					<input
						placeholder="Enter a city..."
						type="text"
						value={this.state.city}
						onChange={this.onInputChange}
					/>
					<i className="search icon"></i>
					</div>
				</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;