import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WeatherDay from './WeatherDay'

class Weather extends React.Component {

    render() {
        return (
            <>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    center>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h3>{this.props.selectedLocation.city_name}</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WeatherDay
                            weatherInfo={this.props.weatherInfo} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default Weather;