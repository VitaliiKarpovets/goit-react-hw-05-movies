import { useState, useEffect } from "react";
import { getMovieTranding } from "../events/ApiService";
import PageHeading from "../components/PageHeading/PageHeading";
import MoviesList from "../components/MoviesList/MoviesList";

export default function HomeView() {
  const [moviesInTrand, setMoviesInTrand] = useState([]);

  useEffect(() => {
    getMovieTranding()
      .then((data) => setMoviesInTrand(data.results))
      .catch((error) => alert(error.message));
  }, []);
  return (
    <>
      <PageHeading text="Welcome to our movies database! Today in trand:"></PageHeading>

      <MoviesList movies={moviesInTrand} />
    </>
  );
}
