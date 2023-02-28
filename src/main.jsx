import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import MeusTimes from './MeusTimes';
import PokeInfo from './PokeInfo';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/meus_times',
    element: <MeusTimes />,
  },
  {
    path: '/:pokemon_name',
    element: <PokeInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
