import { Link, useLocation, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Text, ListItem } from "./AddInfo.styled";

export default function AddInfo() {
  const location = useLocation();

  return (
    <>
      <Text>Additional information</Text>
      <ul>
        <ListItem>
          <Link to="cast" state={{ from: location?.state?.from ?? "/" }}>
            Cast
          </Link>
        </ListItem>
        <ListItem>
          <Link to="reviews" state={{ from: location?.state?.from ?? "/" }}>
            Review
          </Link>
        </ListItem>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
