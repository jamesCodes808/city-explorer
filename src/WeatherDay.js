import React from 'react';

class WeatherDay extends React.Component {

    render() {
        console.log(this.props.weatherInfo)
        return (
            <>
                {this.props.weatherInfo.map(day =>
                    <section>
                        <p>Day: {day.date}</p> <br></br>
                        <p>Forecast: {day.description}</p><br></br>
                    </section>
                )}

            </>
        )
    }
};

export default WeatherDay;