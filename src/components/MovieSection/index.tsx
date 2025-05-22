import styles from "./MovieSection.module.css";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import useFetchMovies from "../../Hooks/useFetchMovies";
import useFilterMovies from "../../Hooks/useFilterMovies";

const MovieSection = () => {
  const { movies, error, isLoading } = useFetchMovies();
  const { search, setSearch, filteredMovies, handleSearch } =
    useFilterMovies(movies);
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText
            value={search}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(event.target.value)
            }
            placeholder="Buscar filmes..."
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.title}>Em cartaz</h1>
        {error && <div className={styles.error}>{error}</div>}
        {isLoading ? (
          <div className={styles.loading}>Carregando...</div>
        ) : filteredMovies.length === 0 ? (
          <div className={styles.error}>Filme não disponível</div>
        ) : (
          <MovieList movies={filteredMovies} />
        )}
      </section>
    </main>
  );
};

export default MovieSection;
