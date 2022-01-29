import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../events/ApiService";

export default function MovieReview() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then((response) => {
        setReviews(response.results);
      })
      .catch((error) => alert(error.message));
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>Reviews not found.</p>
      )}
    </ul>
  );
}
