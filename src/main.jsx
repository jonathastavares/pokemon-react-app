// @ts-ignore
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { NotificationContainer } from 'react-notifications';
import App from './App';
import NavBar from './Components/NavBar';
import PaginaPokemon from './Components/PaginaPokemon';
import MeuTime from './Components/MeuTime';
import store from './store';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div>
          {/* <NotificationContainer /> */}
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:pokemon" element={<PaginaPokemon />} />
            <Route path="/meu_time" element={<MeuTime />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
