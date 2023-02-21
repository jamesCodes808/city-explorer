import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CitySearchForm extends React.Component {

    render() {
        return (
            <>
                <Form>
                    <Form.Group className="mb-0" style={{ width: 400 }} controlId="formBasicText">
                        <Form.Label>Search City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city name"
                            onChange={this.props.handleInput}
                        ></Form.Control>
                        <Form.Text>Type in a city to see its location</Form.Text>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={this.props.handleSearch}>Explore!</Button>
                </Form>
            </>
        )
    }

}

export default CitySearchForm;