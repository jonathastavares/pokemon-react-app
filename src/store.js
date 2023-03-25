/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './redux/pokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
