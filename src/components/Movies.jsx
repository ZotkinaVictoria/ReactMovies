import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;
    return (
    <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key={movie.imdbID}{...movie} />)
        ) : (
            <div className="block-not-found">
                <h4>No movies...</h4>
                <img className="not-found" src="https://media.tenor.com/D0vcGvqdDscAAAAd/sunakook-cat.gif" alt=""/>
            </div>
        )}
    </div>
    );
}

export {Movies};