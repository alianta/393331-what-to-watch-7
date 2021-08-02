import {NameSpace} from '../root-reducer';

export const getServerErrorStatus = (state) => state[NameSpace.SERVER].isServerError;
