import { Routes, Route, Link, Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import NotFound from './pages/AppNotFound/AppNotFound.jsx'
import Layout from './pages/Layout/Layout.jsx'
import Courses from './pages/Courses/Courses.jsx'
import Hamburger from './pages/Layout/Hamburger/Hamburger.jsx'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  const pages = [
    {name: "Home", fn: () => {navigate("/")}},
    {name: "About", fn: () => {navigate("/about")}},
    {name: "Courses", fn: () => {navigate("/courses")}},
  ];

  return (
    <Routes>
      <Route element={<Hamburger branches={pages}/>}>
        <Route path="/" element={<Home branches={pages}/>} />
        <Route element={<Layout />}>
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
