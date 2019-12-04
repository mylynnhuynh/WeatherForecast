import React from 'react';
import WeatherItem from './WeatherItem';
//import './bg.css';

class WeatherWeek extends React.Component{
	
	getTime(timestamp){
		var date = new Date(timestamp*1000);
		var hours = date.getHours();
		var offset = Math.floor((24-hours) / 3);
		
		return offset;
	}
	
	render(){
		
		if (this.props.weatherData[0] === undefined){
			return (
				<div className="ui segment">
					<p></p>
					<div className="ui active inverted dimmer">
						<div className="ui loader"></div>
					</div>
				</div>
			);
		}
		
		//console.log(this.props.weatherData);
		//console.log(this.getTime(this.props.weatherData[0].dt));
		
		var offset = this.getTime(this.props.weatherData[0].dt);
		var dayOne = offset+4;
		if (offset>3){
			dayOne = dayOne-8
		};
		
		return(
			<div className="ui equal width grid">
				<div className="ui row">
					<WeatherItem data={this.props.weatherData[dayOne]}/>
					<WeatherItem data={this.props.weatherData[dayOne + 8]}/>
					<WeatherItem data={this.props.weatherData[dayOne + 16]}/>
					<WeatherItem data={this.props.weatherData[dayOne + 24]}/>
					<WeatherItem data={this.props.weatherData[dayOne + 32]}/>
				</div>
			</div>
		);
		
	}
}

export default WeatherWeek;