import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/app/layouts/MainLayout'
import NotFoundLayout from '@/app/layouts/NotFoundLayout'
import HomePage from '@/pages/home-page'
import NotFoundPage from '@/pages/not-found-page'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    element: <NotFoundLayout />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

export default router