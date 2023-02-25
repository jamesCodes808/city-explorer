import { Carousel } from 'bootstrap';
import React from 'react';

class WeatherDay extends React.Component {

    constructor(){
        super()
        this.state={
            index: 0,
            setIndex: 0
        }
    }

    handleSelect = (selectedIdx, e) => {
        e.preventDefault()
        this.setState({
            index: selectedIdx
        })
    }

    render() {
        console.log(this.props.weatherInfo)
        return (
            <>
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                {this.props.weatherInfo.map(day =>
                    {
                        return <Carousel.Item key={day.date}>
                        <p>Day: {day.date}</p> <br></br>
                        <img src={day.icon} 
                            alt={day.description}
                            className="d-block w-100" />
                                <br></br>
                        <p>Forecast: {day.description}</p><br></br>
                        <p>Max Temp: {day.maxTemp}</p><br></br>
                        <p>Min Temp: {day.minTemp}</p><br></br>        
                        </Carousel.Item>
                    }
                )}
            </Carousel>
            </>
        )
    }
};

export default WeatherDay;