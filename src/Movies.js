import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Movie from './Movie';
class Movies extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h3>Movies</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Movie
                            listOfMovies={this.props.listOfMovies} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )

    }
}

export default Movies;