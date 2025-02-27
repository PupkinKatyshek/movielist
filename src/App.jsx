import React from 'react'
import Table from '../components/Table'
import './scss/stylesheets.scss'

function App() {
  return (
    <>
      <Table />
      <div>{import.meta.env.VITE_FOREVER}</div>
    </>
  )
}

export default App
