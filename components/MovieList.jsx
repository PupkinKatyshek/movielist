import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard.jsx'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${API_URL}movie/popular?api_key=6d2ab02211a5ed6a8a0bac8d3384b200`)
        setMovies(response.data.results)
        console.log(response.data.results)
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [API_URL])

  if (loading) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <h1>Популярные фильмы</h1>
      <ul className="MovieList">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default MovieList
