import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import Stories from './pages/Stories.jsx'
import Category from './pages/Category.jsx'
import Blog from './pages/Blog.jsx'
import { Routes, Route, Outlet } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

// Parent route for Stories
const StoriesLayout = () => {
  return <Outlet />
}

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

        {/* Stories */}
        <Route path="/stories" element={<StoriesLayout />}>

          {/* /stories */}
          <Route index element={<Stories />} />

          {/* /stories/category/technology */}
          {/* /stories/category/lifestyle */}
          {/* /stories/category/ideas */}
          {/* etc. */}
          <Route
            path="category/:category"
            element={<Category />}
          />

        </Route>
      
      <Route
          path="/stories/:slug"
          element={<Blog />}
        />
      </Route>

      

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App