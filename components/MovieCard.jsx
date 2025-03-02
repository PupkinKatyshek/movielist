import React, { useState } from 'react'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
const MovieCard = ({ movie }) => {
  const [userRating, setUserRating] = useState(0)
  const handleRating = (rating) => {
    setUserRating(rating)
  }

  const renderStarRating = () => {
    return (
      <div>
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleRating(index + 1)}
            style={{
              color: index < userRating ? 'gold' : 'gray',
              cursor: 'pointer',
            }}
          >
            ★
          </span>
        ))}
      </div>
    )
  }
  return (
    <li className="movie-card">
      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="title">{movie.title}</h2>
        <p className="movie-text">{movie.overview}</p>
        <p>Рейтинг: {movie.vote_average}</p>
        <div>{renderStarRating()}</div>
      </div>
    </li>
  )
}

export default MovieCard
