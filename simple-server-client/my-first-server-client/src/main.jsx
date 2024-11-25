import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Servers from './components/Servers.jsx';
import Server from './components/Server.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/server",
        element: <Servers />,
        loader: () => fetch('http://localhost:5000/server')
      },
      {
        path: '/server/:id',
        element: <Server></Server>,
        loader: ({ params }) => fetch(`http://localhost:5000/server/${params.id}`)
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
