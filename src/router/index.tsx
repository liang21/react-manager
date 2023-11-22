import NotAuth from '@/views/403'
import NotFound from '@/views/404'
import Home from '@/views/Home'
import Login from '@/views/login/Login'
import { Navigate, useRoutes } from 'react-router-dom'

const router = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
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

export default function Router() {
  return useRoutes(router)
}
