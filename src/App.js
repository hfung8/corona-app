import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './API';
import coronaImage from './images/coronavirus.png';
import styles from './App.module.css';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
const lookup = require('country-code-lookup');



class App extends Component {

  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    const countryName = lookup.byCountry(country);
    const flag = await getUnicodeFlagIcon(countryName.country);
    this.setState({ data: fetchedData, country : country, flag: flag});
    console.log(country);
    console.log(this.state);
  }
  
  
  render() {
    const { data, country } = this.state;
    
    return (
      <div className={styles.container}> 
      <img className={styles.image} alt="COVID-19" src={coronaImage}/>
      <Cards data = {data} />
      <CountryPicker getFlag={this.getFlag} handleCountryChange={this.handleCountryChange}/>
      <div>{this.state.flag}</div>
      <Chart data={data} country={country}/>
      </div>
    );
  }
}
export default App;