/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
// import { NotificationManager } from 'react-notifications';
import axios from 'axios';

const pegarCategorias = (resultado) => {
  const todasAsCategorias = [];
  resultado.forEach((pokemon) => {
    pokemon.types.forEach((tipo) => {
      todasAsCategorias.push(tipo.type.name);
    });
  });
  const categoriasFiltradas = [...new Set(todasAsCategorias)];
  const meuTime = JSON.parse(localStorage.getItem('meuTime')) || [];
  return {
    pokemons: resultado, categorias: categoriasFiltradas, allPokemons: resultado, myTeam: meuTime,
  };
};

const getPokemon = async (dados) => {
  const resultado = await Promise.all(dados.map(async (url) => {
    const results = await axios.get(url);
    return results.data;
  }));
  return pegarCategorias(resultado);
};

const pegarListaUrl = async () => {
  const resultado = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
  const dados = resultado.data.results;
  const listaUrl = [];
  dados.forEach((obj) => {
    listaUrl.push(obj.url);
  });
  const resultadoGetPokemon = await getPokemon(listaUrl);
  return resultadoGetPokemon;
};

export const fetchPokemons = createAsyncThunk('GET_POKEMONS', async (thunkAPI) => {
  const data = await pegarListaUrl();
  return data;
});

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    categorias: [],
    allPokemons: [],
    myTeam: [],
  },
  reducers: {
    filtrarPokemons: (state, action) => {
      const searchQuery = action.payload;
      const pokemonsFiltrados = current(state.allPokemons).filter((pokemon) => pokemon.name.includes(searchQuery.toLowerCase()));
      if (action.payload === '' || action.payload === null) {
        return {
          ...state,
          pokemons: state.allPokemons,
        };
      }
      return {
        ...state,
        pokemons: pokemonsFiltrados,
      };
    },
    setInitialData: (state, action) => action.payload,
    addPokemonToTeam: (state, action) => {
      const newTeam = [...state.myTeam, action.payload];
      localStorage.setItem('meuTime', JSON.stringify(newTeam));
      // NotificationManager.success(`${action.payload.name} adicionado com sucesso.`, null, 2000);
      return {
        ...state,
        myTeam: newTeam,
      };
    },
    removePokemonFromList: (state, action) => {
      const newTeam = current(state.myTeam).filter((pokemon) => pokemon.name !== action.payload);
      localStorage.setItem('meuTime', JSON.stringify(newTeam));
      return {
        ...state,
        myTeam: newTeam,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => action.payload);
  },
});

export const {
  filtrarPokemons, setInitialData, addPokemonToTeam, removePokemonFromList,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
