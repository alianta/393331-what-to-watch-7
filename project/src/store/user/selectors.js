import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getAvatar = (state) => state[NameSpace.USER].authorizationInfo;
