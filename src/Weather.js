import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
                            {this.props.selectedLocation.city_name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.weatherInfo.map(weatherOfTheDay =>
                            <section class="weather-info">
                                <p>{weatherOfTheDay.date}</p> <br></br>
                                <p>{weatherOfTheDay.description}</p><br></br>
                            </section>
                        )
                        }
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