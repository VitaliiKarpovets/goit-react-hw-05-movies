import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../events/ApiService";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import PageHeading from "../components/PageHeading/PageHeading";
import AddInfo from "../components/AddInfo/AddInfo";
import ButtonBack from "../components/ButtonBack/ButtonBack";

export default function MovieView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <PageHeading text="Movie info"></PageHeading>

      <ButtonBack />

      <MovieInfo movie={movie} />
      <AddInfo />
    </>
  );
}
