import {NameSpace} from '../root-reducer';

export const getComments = (state) => state[NameSpace.REVIEW].currentFilmComments;
export const getCommentsLoadedStatus = (state) => state[NameSpace.REVIEW].isCurrentFilmCommentsLoaded;
