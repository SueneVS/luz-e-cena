import { useEffect, useState } from 'react'
import type { Movie } from '../Types'

const useFilterMovies = (movies: Movie[]) => {
  const [search, setSearch] = useState<string>("")
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [search, movies]);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return { search, setSearch, filteredMovies, handleSearch };
}

export default useFilterMovies
