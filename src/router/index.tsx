import NotAuth from '@/views/403'
import NotFound from '@/views/404'
import Home from '@/views/Home'
import Login from '@/views/login/Login'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = [
  {
    path: '/',
    element: <Navigate to={'/home'} />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '/403',
    element: <NotAuth />
  }
]

export default createBrowserRouter(router)
