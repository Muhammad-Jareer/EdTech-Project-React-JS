import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Courses from './Components/Courses/Courses.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Roadmap from './Components/Roadmap/Roadmap.jsx'
import Home from './Components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}  />
      <Route path='course' element={<Courses />} />
      <Route path='blog' element={<Blog />} />
      <Route path='roadmap' element={<Roadmap />} />
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
