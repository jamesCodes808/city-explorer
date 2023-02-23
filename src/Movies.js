import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Movies extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    center>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Movies
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.listOfMovies.map(movie =>


                            < section >
                                <p>Title: {movie.title}</p> <br></br>
                                <p>Release Date: {movie.releaseDate}</p> <br></br>
                                <p>Popularity: {movie.popularity}</p> <br></br>
                                <p>Synopsis: {movie.overview}</p> <br></br>
                            </section>

                        )}
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