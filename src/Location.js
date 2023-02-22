import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ACCESS_TOKEN = process.env.REACT_APP_LOCATIONIQKEY;

class Location extends React.Component {

    handleBtnClick = () => {
        this.props.setSelectedLocation(this.props.cityObject)

        console.log(this.props)

        this.props.getWeatherInfoButton()

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
                                onClick={this.handleBtnClick}> Weather
                            </Button>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        )
    }
};

export default Location;