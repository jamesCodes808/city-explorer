import './App.css';
import React from 'react';
import CitySearchForm from './CitySearchForm';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ACCESS_TOKEN = process.env.REACT_APP_LOCATIONIQKEY;


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      searchQuery: '',
      searchResults: [],
      error: null
    }
  }

  handleInput = async (e) => {
    let value = e.target.value;

    this.setState({
      searchQuery: value,
    })
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

  render() {
    let condition = this.state.searchQuery && this.state.searchResults.length;
    let errorCondition = this.state.error;
    console.log(this.state)
    return (
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
                      <Card className="card-container">
                        <Card.Img
                          variant="top"
                          src={`https://maps.locationiq.com/v3/staticmap?key=${ACCESS_TOKEN}&center=${city.lat},${city.lon}&zoom=13&size=200x200&markers=icon:tiny-red-cutout|${city.lat},${city.lon}`}
                          style={{ width: 200, height: 200, }}
                          className="card-image"
                        />
                        <Card.Body>
                          <Card.Title>{city.display_name}</Card.Title>
                          <Card.Text>
                            Lattitude: {city.lat} <br></br>
                            Longitude: {city.lon}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </main>
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
