import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {getGenreList as createGenreLst, getFilmsFromGenre as createFilmFromGenreList} from '../../utils';

export const getLoadedDataStatus = (state) => state[NameSpace.FILM].isDataLoaded;
export const getFilmLoadedStatus = (state) => state[NameSpace.FILM].isFilmDataLoaded;
export const getSimilarFilmLoadedStatus = (state) => state[NameSpace.FILM].isSimilarFilmsLoaded;
export const getFilmOfDayLoadedStatus = (state) => state[NameSpace.FILM].isFilmOfDayLoaded;
export const getCurrentFilm = (state) => state[NameSpace.FILM].currentFilm;
export const getPromoFilm = (state) => state[NameSpace.FILM].promoFilm;
export const getFilms = (state) => state[NameSpace.FILM].films;
export const getSimilarFilms = (state) => state[NameSpace.FILM].similarFilms;
export const getGenre = (state) => state[NameSpace.FILM].genre;
export const getGenreList = createSelector(
  getFilms,
  createGenreLst,
);
export const getFilmsFromGenre = createSelector(
  getFilms,
  getGenre,
  createFilmFromGenreList,
);
