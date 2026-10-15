import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/Login",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
