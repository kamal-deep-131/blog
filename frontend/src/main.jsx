import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Layout } from './components'
import { Home, Register, Login, SingleBlogPage, Profile, PageNotFound, AddBlog } from './pages'
import { createBrowserRouter, createRoutesFromChildren, Outlet, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/single-blog' element={<SingleBlogPage />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/add-blog' element={<AddBlog />} />

      {/* 404 page  */}
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
