import React from 'react';
import WeatherHourItem from './WeatherHourItem';


class WeatherHourList extends React.Component{
	
	render(){
		const w = this.props.weatherByHour.slice(0,9).map(weather => {
			return (
				<WeatherHourItem key={weather.dt} weatherData={weather} />
			);
		});
		
		return(
			<div className="ui equal width grid">
				<div className="ui row">
					{w}
				</div>
			</div>
		);
	}
}


export default WeatherHourList;