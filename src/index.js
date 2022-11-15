import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TvPopularPage from "./pages/tvPopularPage";
import ActorPopularPage from "./pages/actorsPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./AuthProvider";
import MoviesContextProvider from "./contexts/moviesContext";
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const ShowPage = lazy(() => import("./pages/tvDetailsPage"));
const ActorPage = lazy(() => import("./pages/actorDetailsPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const SearchMoviePage = lazy(() => import("./pages/searchMoviePage"));
const SearchShowPage = lazy(() => import("./pages/searchTVShowPage"));
const SearchActorPage = lazy(() => import("./pages/searchActorPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <MoviesContextProvider>
    <AuthProvider>
    <Suspense fallback={<h1>Loading page</h1>}>
    <Routes>
    <Route path="/shows/popular" element={<TvPopularPage />} />
      <Route path="/actors/popular" element={<ActorPopularPage />} />
      <Route path="/actors/:id" element={<ActorPage />} />
      <Route path="/shows/:id" element={<ShowPage />} />
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/movies/search" element={<SearchMoviePage />} />
      <Route path="/shows/search" element={<SearchShowPage />} />
      <Route path="/actors/search" element={<SearchActorPage />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/reset" element={<Reset />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
    </Suspense>
    </AuthProvider>
    </MoviesContextProvider>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};
const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);