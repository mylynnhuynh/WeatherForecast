import React from 'react';
import './CurrentWeather.css';


class CurrentWeather extends React.Component{
	
	render(){
		if (!this.props.current){
			return (
				<div className="ui segment">
					<p></p>
					<div className="ui active inverted dimmer">
						<div className="ui loader"></div>
					</div>
				</div>
			);
		}
		
		var moreInfo = 
			"------------------------- " + 
			"Minimum: " + this.props.current.main.temp_min + " " + 
			"Maximum: " + this.props.current.main.temp_max + " " +
			"------------------------- " + 
			"Humidity: " + this.props.current.main.humidity + "% " +
			"------------------------- " + 
			"Pressure: " + this.props.current.main.pressure + " hpa " +
			"------------------------- " + 
			"Wind: " + this.props.current.wind.speed + " m/h " +
			"------------------------- ";
		
		return(
			<div className="current-item">
				<h3>{this.props.current.name} is currently</h3>
				<div>
					<h1>{this.props.current.main.temp}°F</h1>
					<img 
						alt={this.props.current.weather[0].description} 
						src={`http://openweathermap.org/img/wn/${this.props.current.weather[0].icon}@2x.png`} 
						
					/>
					<h4>{this.props.current.weather[0].description}</h4>
					<div className="sample-container">
						<div className="ui grey button" data-tooltip={moreInfo} data-inverted="" data-position="bottom center">
							More Info
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CurrentWeather;