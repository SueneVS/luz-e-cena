import { useEffect, useState } from 'react';
import type { Movie } from '../Types';
import { getMovies } from '../Api';

const useFetchMovies = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const movies = await getMovies();
      setMovies(movies);
      setError(null);
    } catch {
      setError(
        "Não foi possível carregar os filmes. Tente novamente mais tarde."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, isLoading, error }

}

export default useFetchMovies;