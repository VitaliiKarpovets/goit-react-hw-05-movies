import { Link as RouterLink, useLocation } from "react-router-dom";
import { List, ListItem } from "./MoviesList.styled";

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return (
          <ListItem key={id}>
            <RouterLink to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </RouterLink>
          </ListItem>
        );
      })}
    </List>
  );
}
