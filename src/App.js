import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './API'
import coronaImage from './images/coronavirus.png';
import styles from './App.module.css';
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
    this.setState({ data: fetchedData, country : country });
    console.log(country);
  }

  render() {
    const { data, country } = this.state;
    
    return (
      <div className={styles.container}> 
      <img className={styles.image} alt="COVID-19" src={coronaImage}/>
      <Cards data = {data} />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
      </div>
    );
  }
}
export default App;