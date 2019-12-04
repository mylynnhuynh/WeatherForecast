import React from 'react';


class WeatherHourItem extends React.Component{
	
	getTime(timestamp){
		var date = new Date(timestamp*1000);
		var hours = date.getHours();
		var mins = '0' + date.getMinutes();
		var formattedTime = hours + ':' + mins.substr(-2);
		return formattedTime;
	}
	
	render(){
		var time = this.getTime(this.props.weatherData.dt);
		
		return(
			<div className="column" style={{textAlign: 'center'}}>
				<div>
					{this.props.weatherData.main.temp}°
				</div>
				<div>
				<img 
					alt={this.props.weatherData.weather[0].description} 
					src={`http://openweathermap.org/img/wn/${this.props.weatherData.weather[0].icon}@2x.png`} 
					width="65" 
					height="65"
				/>
				</div>
				<div>
					{time}
				</div>
			</div>
		);
	}
}

export default WeatherHourItem;