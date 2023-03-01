import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './Components/NavBar';
import PaginaPokemon from './Components/PaginaPokemon';
import MeusTimes from './Components/MeusTimes';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:pokemon',
    element: <PaginaPokemon />,
  },
  {
    path: '/meus_times',
    element: <MeusTimes />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
