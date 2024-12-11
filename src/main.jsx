import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './components/App'
import AllLandlords from './components/AllLandlords'
import LandlordForm from './components/LandlordForm'
import LandlordDetails from './components/LandlordDetails'

const routes = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <AllLandlords />
      },
      {
        path: "add-new-landlord",
        element: <LandlordForm />
      },
      {
        path: "landlords/:id",
        element: <LandlordDetails />
      },
    ]
  }
]

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
