import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(row => row.main.temp);
    const pressures = cityData.list.map(row => row.main.pressure);
    const humidities = cityData.list.map(row => row.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    return(
        <tr key = {name}>
          <td><GoogleMap lon ={lon} lat ={lat}/></td>
          <td><Chart data ={temps} color="orange" units ="C"/></td>
          <td><Chart data ={pressures} color="blue" units ="hPa"/></td>
          <td><Chart data ={humidities} color="Red" units = "%"/></td>
        </tr>
    );
  }

  render(){
    return(
        <table className = "table table-hover">
          <thead>
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
          </thead>

      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
      </table>

    );
  }
}

//ES6 standard
// function mapStateToProps({weather}){
//   return {weather}; // {weather} === {weather : weather}
// }

function mapStateToProps(state){
  return{weather : state.weather};
}

export default connect(mapStateToProps)(WeatherList);
