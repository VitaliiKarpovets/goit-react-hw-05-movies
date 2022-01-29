import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFoundView from "./views/NotFoundView";

function App() {
  const AppBar = lazy(() => import("./components/AppBar/AppBar"));
  const HomeView = lazy(() => import("./views/HomeView"));
  const MoviesView = lazy(() => import("./views/MoviesView"));
  const MovieView = lazy(() => import("./views/MovieView"));
  const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
  const MovieReview = lazy(() =>
    import("./components/MovieReview/MovieReview")
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId" element={<MovieView />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
