import {NameSpace} from '../root-reducer';

export const getLoadedDataStatus = (state) => state[NameSpace.FILM].isDataLoaded;
export const getFilmLoadedStatus = (state) => state[NameSpace.FILM].isFilmDataLoaded;
export const getSimilarFilmLoadedStatus = (state) => state[NameSpace.FILM].isSimilarFilmsLoaded;
export const getFilmOfDayLoadedStatus = (state) => state[NameSpace.FILM].isFilmOfDayLoaded;
export const getCurrentFilm = (state) => state[NameSpace.FILM].currentFilm;
export const getFilms = (state) => state[NameSpace.FILM].films;
export const getSimilarFilms = (state) => state[NameSpace.FILM].similarFilms;
