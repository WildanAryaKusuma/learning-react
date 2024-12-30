import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import ErrorPage from './pages/404.jsx'
import RegisterPage from './pages/register.jsx'
import ProductsPage from './pages/products.jsx'
import Counter from './components/Fragments/Counter.jsx'
import ProfilePage from './pages/profile.jsx'

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "login", 
    element: <LoginPage />
  },
  {
    path: "register", 
    element: <RegisterPage />
  },
  {
    path: "products", 
    element: <ProductsPage />
  },
  {
    path: "profile", 
    element: <ProfilePage />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
