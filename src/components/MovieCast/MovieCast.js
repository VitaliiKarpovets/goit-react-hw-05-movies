import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "../../events/ApiService";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActors(movieId)
      .then((response) => setCast(response.cast))
      .catch((error) => alert(error.message));
  }, [movieId]);

  return (
    <ul>
      {cast.length !== 0 &&
        cast.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
}
