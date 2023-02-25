import React from 'react';

class WeatherDay extends React.Component {

    render() {
        console.log(this.props.weatherInfo)
        return (
            <>
                {this.props.weatherInfo.map(day =>
                    <section>
                        <p>Day: {day.date}</p> <br></br>
                        <p><img src={day.icon} alt={day.description}></img></p><br></br>
                        <p>Forecast: {day.description}</p><br></br>
                        <p>Max Temp: {day.maxTemp}</p><br></br>
                        <p>Min Temp: {day.minTemp}</p><br></br>
                    </section>
                )}

            </>
        )
    }
};

export default WeatherDay;