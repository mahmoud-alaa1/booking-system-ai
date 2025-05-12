import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

import './index.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { ThemeProvider } from './components/theme-provider'
import Login from './pages/Login'
import MainLayout from './components/layout/MainLayout'
import Signup from './pages/Signup'
import { Provider } from 'react-redux'
import { store } from './store'
import Bookings from './pages/Bookings'
import EventDetails from './pages/EventDetails'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      }
      , {
        path: "/sign-up",
        element: <Signup />
      },
      {
        path: "/bookings",
        element: <Bookings />
      },
      {
        path: "/event/:id",
        element: <EventDetails />
      }

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider>
      <Toaster position='top-center' />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </Provider>
)
