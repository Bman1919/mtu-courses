import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import NotFound from './pages/AppNotFound/AppNotFound.jsx'
import Layout from './pages/Layout/Layout.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
