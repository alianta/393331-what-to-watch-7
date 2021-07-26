import { DEFAULT_GENRE, PROMO_FILM_ID } from '../../const';
import {adaptFilmToClient} from '../adapter';
import {createReducer} from '@reduxjs/toolkit';
import {loadFilmInfo, loadPromoFilm, loadSimilarFilms, loadFilms, changeGenre, changeFilmInfo} from '../action';

const initialState = {
  genre: DEFAULT_GENRE,
  films: [],
  similarFilms: [],
  promoFilm: {},
  currentFilm: {},
  isDataLoaded: false,
  isFilmDataLoaded: false,
  isSimilarFilmsLoaded: false,
  isFilmOfDayLoaded: false,
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilmInfo, (state, action) => {
      state.currentFilm = adaptFilmToClient(action.payload);
      state.isDataLoaded = true;
      state.isFilmDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = adaptFilmToClient(
        {
          ...action.payload,
          id: PROMO_FILM_ID,
        });
      state.isFilmOfDayLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload.map((film) => adaptFilmToClient(film));
      state.isSimilarFilmsLoaded = true;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload.map((film) => adaptFilmToClient(film));
      state.isDataLoaded =  true;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre =  action.payload;
    })
    .addCase(changeFilmInfo, (state, action) => {
      const index = state.films.findIndex((film) => film.id === action.payload.id);
      state.films = [
        ...state.films.slice(0, index),
        adaptFilmToClient(action.payload),
        ...state.films.slice(index + 1),
      ];
      state.currentFilm = adaptFilmToClient(action.payload);
    });
});

export {filmData};
