import React from 'react'
import SearchBar from './SearchBar';
import weather from '../apis/weather';
import WeatherHourList from './WeatherHourList';
import CurrentWeather from './CurrentWeather';
import WeatherWeek from './WeatherWeek';


class App extends React.Component{
	
	state = {
		weekWeather:[],
		currWeather:null,
		lat: null,
		lon: null,
		error: ''
	};
	
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ 
					lat: position.coords.latitude, 
					lon:position.coords.longitude}
				);
				this.getWeather('',this.state.lat,this.state.lon);
			},
				
			err => this.getWeather('Oxnard','','')
		
		);
	}
	
	getWeather = async (city, lat, lon) =>{
		this.setState({ error:'' })
		const response = await weather.get('/forecast',{
			params: {
				appid: 'API KEY HERE',
				units: 'imperial',
				q: city,
				lat: lat,
				lon: lon
			}
		})
		.catch(error => {
			this.setState({ error:error.response.data.message })
		});
		
		const response2 = await weather.get('/weather',{
			params: {
				appid: 'a5f66cd56d9875246a9d2d17a200629e',
				units: 'imperial',
				q: city,
				lat: lat,
				lon: lon
			}
		})
		.catch(error => {
			this.setState({ error:error.response.data.message })
		});
		
		if (this.state.error){
			window.alert(this.state.error); 
			return;
		};
		
		this.setState({ 
			weekWeather: response.data.list,
			currWeather: response2.data
		});
		
		//console.log(this.state.weekWeather);
	}
	
	render(){
		//console.log(this.state.weekWeather);
		return(
			<div className="ui container">
				<SearchBar getWeather={this.getWeather}/>
				<div>
					<CurrentWeather current={this.state.currWeather}/>
					<label className="ui label">Today</label>
					<div className="ui segment">
						<WeatherHourList weatherByHour={this.state.weekWeather}/>
					</div>
					<div>
						<label className="ui label">This Week's Forecast</label>
						<br></br>
						<br></br>
					</div>
					<WeatherWeek weatherData={this.state.weekWeather}/>
				</div>
			</div>
		);
	}
}



export default App;