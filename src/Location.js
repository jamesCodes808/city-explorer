import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ACCESS_TOKEN = process.env.REACT_APP_LOCATIONIQKEY;

class Location extends React.Component {

    handleWeatherBtnClick = () => {
        this.props.setSelectedLocationForWeatherButton(this.props.cityObject)
    }

    handleMovieBtnClick = () => {
        this.props.setSelectedLocationForMovieButton(this.props.cityObject)
    }

    render() {
        return (
            <section>
                <Card className="card-container">
                    <Card.Img
                        variant="top"
                        src={`https://maps.locationiq.com/v3/staticmap?key=${ACCESS_TOKEN}&center=${this.props.cityLat},${this.props.cityLon}&zoom=13&size=200x200&markers=icon:tiny-red-cutout|${this.props.cityLat},${this.props.cityLon}`}
                        style={{ width: 200, height: 200, }}
                        className="card-image"
                    />
                    <Card.Body>
                        <Card.Title>{this.props.cityName}</Card.Title>
                        <Card.Text>
                            Lattitude: {this.props.cityLat} <br></br>
                            Longitude: {this.props.cityLon} <br></br>
                            <Button
                                variant="primary"
                                onClick={this.handleWeatherBtnClick}> Weather
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={this.handleMovieBtnClick}> Movies
                            </Button>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        )
    }
};

export default Location;