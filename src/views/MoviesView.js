import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMovieByName } from "../events/ApiService";
import PageHeading from "../components/PageHeading/PageHeading";
import Form from "../components/Form/Form";
import MoviesList from "../components/MoviesList/MoviesList";

export default function MoviesView() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get("query") ?? "";

  let onSubmit = (request) => {
    navigation({ ...location, search: `query=${request}` });
  };

  useEffect(() => {
    if (!searchQuery) return;

    getMovieByName(searchQuery).then((data) => setMovies(data.results));
  }, [searchQuery]);

  return (
    <>
      <PageHeading text="Movies list"></PageHeading>

      <Form onSubmit={onSubmit} />
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </>
  );
}
