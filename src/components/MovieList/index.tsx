import styles from "./MovieList.module.css";
import MovieCard from "../MovieCard";
import type { Movie } from "../../Types";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
