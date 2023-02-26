import './App.css';
import React from 'react';
import CitySearchForm from './CitySearchForm';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Weather from './Weather';
import Location from './Location';
import Movies from './Movies';


const ACCESS_TOKEN = process.env.REACT_APP_LOCATIONIQKEY;

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      searchQuery: '',
      searchResults: [],
      error: null,
      selectedLocation: {},
      weatherInfo: [],
      weatherModalShow: false,
      setWeatherModalShow: false,
      listOfMovies: [],
      movieModalShow: false,
      setMovieModalShow: false,
      moviesRetrievedTime: '',
      weatherRetrievedTime: '',
    }
  };

  handleInput = async (e) => {
    let value = e.target.value;

    this.setState({
      searchQuery: value,
    })
  };

  setSelectedLocationForWeatherButton = (locationObject) => {
    this.setState({
      selectedLocation: locationObject
    }, this.getWeatherInfoButton)
  };

  setSelectedLocationForMovieButton = (locationObject) => {
    this.setState({
      selectedLocation: locationObject
    }, this.getMovieInfoButton)
  };

  handleSearch = async (e) => {
    e.preventDefault();
    try {
      let request = {
        url: `https://us1.locationiq.com/v1/search?key=${ACCESS_TOKEN}&q=${this.state.searchQuery}&format=json`,
        method: 'GET'
      }
      let response = await axios(request);

      console.log(response)

      this.setState({
        searchResults: response.data
      });
    } catch (e) {
      console.log(e);
      this.setState({ error: e });
    }
  };


  getWeatherInfoButton = async () => {

    let cityName = this.state.selectedLocation.display_name.slice(0, this.state.selectedLocation.display_name.indexOf(','));


    try {

      let request = {
        url: `https://city-explorer-api-bzgb.onrender.com/weather?city_name=${cityName}&lon=${this.state.selectedLocation.lon}&lat=${this.state.selectedLocation.lat}`,
        method: 'GET'
      }
      let response = await axios(request);
      console.log(cityName)

      console.log(response)

      this.setState({
        weatherInfo: response.data,
        weatherModalShow: true,
        setWeatherModalShow: true,
        weatherRetrievedTime: Date.now()
      })

      console.log(`Weather Retrieved From API: ${this.state.weatherRetrievedTime}`)

    } catch (e) {
      this.setState({ error: e })
    }
  };

  getMovieInfoButton = async () => {

    let cityName = this.state.selectedLocation.display_name.slice(0, this.state.selectedLocation.display_name.indexOf(','));

    axios.get(`https://city-explorer-api-bzgb.onrender.com/movie?query=${cityName}`)
      .then(response => {
        this.setState({
          listOfMovies: response.data,
          movieModalShow: true,
          setMovieModalShow: true,
          moviesRetrievedTime: Date.now()
        })

        console.log(`Movies Retrieved From API: ${this.state.moviesRetrievedTime}`)

      })
      .catch(err => {
        this.setState({ error: err })
      })
  };

  render() {

    let errorCondition = this.state.error;
    console.log(this.state)
    return (
      <>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <div className="App" >
            <header className="App-header">
              <CitySearchForm
                handleInput={this.handleInput}
                handleSearch={this.handleSearch} />
            </header>
            <Container fluid="lg">
              <main>
                <Row className="justify-content-sm-center">
                  {errorCondition ?
                    <ErrorMessage
                      errorCode={this.state.error.code}
                      errorMessage={this.state.error.message} />
                    :
                    this.state.searchResults.map(city => (
                      <Col sm={12} md={6} lg={4} xl={4}>
                        <Location
                          cityLat={city.lat}
                          cityLon={city.lon}
                          cityName={city.display_name}
                          cityObject={city}
                          setSelectedLocationForWeatherButton={this.setSelectedLocationForWeatherButton}
                          setSelectedLocationForMovieButton={this.setSelectedLocationForMovieButton}
                        />
                      </Col>
                    ))}
                </Row>
              </main>
            </Container>
          </div>
        </ThemeProvider>
        <Weather
          selectedLocation={this.state.selectedLocation}
          show={this.state.weatherModalShow}
          weatherInfo={this.state.weatherInfo}
          onHide={() => this.setState({ weatherModalShow: false, setWeatherModalShow: false })} />
        <Movies
          listOfMovies={this.state.listOfMovies}
          show={this.state.movieModalShow}
          onHide={() => this.setState({
            movieModalShow: false,
            setMovieModalShow: false
          })} />
      </>
    );
  }
}
export default App;
