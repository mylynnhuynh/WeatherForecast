import React from 'react';


class WeatherItem extends React.Component{
	
	
	getDay(timestamp){
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		var date = new Date(timestamp*1000);
		var day = days[date.getDay()];
		return day;
	}
	
	getDate(timestamp){
		var date = new Date(timestamp*1000);
		var day = date.getDate();
		var month = date.getMonth()+1;
		var formattedDate = month + '/' + day;
		return formattedDate;
	}
	
	render(){
		
		var dayOfWeek = this.getDay(this.props.data.dt);
		var date = this.getDate(this.props.data.dt);

		return (
			<div className="column" style={{textAlign: 'center'}}>
				<div className="ui segments">
					<div className="ui segment">
						{dayOfWeek} ({date})
					</div>
					<div className="ui segment">	
					<div>
						<h3>{this.props.data.main.temp}°</h3>
					</div>
					<div>
						<img 
							alt={this.props.data.weather[0].description} 
							src={`http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`} 
							width="80" 
							height="80"
						/>
					</div>
					<div>
						{this.props.data.weather[0].main}
					</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WeatherItem;