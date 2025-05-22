import styles from "./MovieSection.module.css";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import { useEffect, useState } from "react";
import type { Movie } from "../../Types";
import { getMovies } from "../../Api";

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
      setError(null);
    } catch {
      setError(
        "Não foi possível carregar os filmes. Tente novamente mais tarde."
      );
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.title}>Em cartaz</h1>
        {error && <div className={styles.error}>{error}</div>}
        <MovieList movies={movies}></MovieList>
      </section>
    </main>
  );
};

export default MovieSection;
