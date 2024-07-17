import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './context/context'
// import App from './App.jsx'
import './index.css'
import { Layout } from './components'
import { Home, Register, Login, SingleBlogPage, Profile, PageNotFound, AddBlog } from './pages'
import { createBrowserRouter, createRoutesFromChildren, Outlet, Route, RouterProvider } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<ProtectedRoutes >
        <Profile />
      </ProtectedRoutes>}>

      </Route>
      <Route path='/add-blog' element={<AddBlog />} />
      <Route path='/single-blog' element={<SingleBlogPage />} />

      {/* 404 page  */}
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
