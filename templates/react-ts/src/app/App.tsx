import { RouterProvider } from 'react-router-dom'
import router from '@/app/routing/router'

const App = () => {
  return <RouterProvider router={router} />
}

export default App