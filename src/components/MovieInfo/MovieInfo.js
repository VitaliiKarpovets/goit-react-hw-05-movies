import {
  Container,
  PosterThumb,
  Poster,
  MovieDetails,
  Descr,
  Text,
  GenresList,
  GenresListItem,
} from "./MovieInfo.styled";

export default function MovieInfo({ movie }) {
  return (
    <Container>
      <PosterThumb>
        <Poster
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      </PosterThumb>
      <MovieDetails>
        <Descr>
          <h2>
            {movie.original_title} {`(${parseInt(movie.release_date)})`}
          </h2>
          <Text>{`User Score: ${movie.vote_average}`}</Text>
        </Descr>
        <Descr>
          <h3>Overview</h3>
          <Text>{movie.overview}</Text>
        </Descr>
        <Descr>
          <h4>Genres</h4>
          <GenresList>
            {movie.genres &&
              movie.genres.map(({ id, name }) => {
                return <GenresListItem key={id}>{name}</GenresListItem>;
              })}
          </GenresList>
        </Descr>
      </MovieDetails>
    </Container>
  );
}
