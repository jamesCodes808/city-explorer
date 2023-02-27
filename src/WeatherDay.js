import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class WeatherDay extends React.Component {

    constructor() {
        super()
        this.state = {
            index: 0,
            setIndex: 0,
            screenWidth: 0
        }
    }

    setScreenWidth = () => {
        this.setState({
            screenWidth: window.innerWidth
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.setScreenWidth)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setScreenWidth)
    }

    handleSelect = (selectedIdx, e) => {
        e.preventDefault()
        this.setState({
            index: selectedIdx
        })
    }

    render() {

        // new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }) 


        return (
            <>
                {this.state.screenWidth < 768 ?
                    <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                        {this.props.weatherInfo.map(day => {
                            return <Carousel.Item key={day.date}>
                                <p>{new Date(day.date).toDateString()}</p> <br></br>
                                <img src={day.icon}
                                    alt={day.description}
                                    className="d-block w-70 weather-img" />
                                <br></br>
                                <p>Forecast: {day.description}</p><br></br>
                                <p>Max Temp: {day.maxTemp}&deg;F</p><br></br>
                                <p>Min Temp: {day.minTemp}&deg;F</p><br></br>
                            </Carousel.Item>
                        }
                        )}
                    </Carousel>
                    :
                    <>
                        <Row className="justify-content-sm-center">
                            {
                                this.props.weatherInfo.map(day => {
                                    return <section className='weather-section'>
                                        <Col md={1.5} lg={1.5} xl={1.5} className="weather-card-col">
                                            <Card style={{ width: '8rem' }}>
                                                <Card.Img
                                                    src={day.icon}
                                                    alt={day.description}
                                                    className="w-50 weather-img" />
                                                <Card.Title><p>{new Date(day.date).toDateString()}</p></Card.Title>
                                                <Card.Text>
                                                    <p>Forecast:</p>
                                                    <br></br>
                                                    <p>{day.description}</p><br></br>
                                                    <p>Max Temp:</p><br></br>
                                                    <p>{day.maxTemp}&deg;F</p><br></br>
                                                    <p>Min Temp: </p><br></br>
                                                    <p>{day.minTemp}&deg;F</p><br></br>
                                                </Card.Text>
                                            </Card>
                                        </Col>
                                    </section>
                                })
                            }
                        </Row>
                    </>
                }
            </>
        )
    }
};

export default WeatherDay;