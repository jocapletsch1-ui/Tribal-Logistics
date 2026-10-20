import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Cadastro from './Cadastro.jsx';
import Home from './Home.jsx';
import CadastroCargas from './CadastroCargas.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cadastrocargas",
    element: <CadastroCargas />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
