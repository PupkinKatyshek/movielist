import React from 'react'
import MovieList from '../components/MovieList'

import './scss/stylesheets.scss'

function App() {
  return (
    <>
      <MovieList />
      <div>{import.meta.env.VITE_FOREVER}</div>
    </>
  )
}

export default App
