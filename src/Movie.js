import React from 'react';

class Movies extends React.Component {

    render() {
        return (
            <>
                {this.props.listOfMovies.map(movie =>

                    < section >
                        <p>Title: {movie.title}</p> <br></br>
                        <img src={movie.posterImgPath} alt={movie.title}></img>
                        <p>Release Date: {movie.releaseDate}</p> <br></br>
                        <p>Popularity: {movie.popularity}</p> <br></br>
                        <p>Synopsis: {movie.overview}</p> <br></br>
                    </section>
                )}
            </>
        )
    }
}

export default Movies;