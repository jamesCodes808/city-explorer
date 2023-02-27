import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Movies extends React.Component {

    constructor() {
        super()
        this.state = {
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
        return (
            <>
                <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                    {this.props.listOfMovies.map(movie => {
                        return <Carousel.Item key={movie.id}>
                            <img
                                className="d-block w-100"
                                src={movie.posterImgPath}
                                alt={movie.title} />


                            <h3>{movie.title}</h3>
                            <p className='movie-description'>{movie.overview}</p>

                        </Carousel.Item>


                    }
                    )}
                </Carousel>
            </>
        )
    }
}

export default Movies;