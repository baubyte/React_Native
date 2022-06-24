import {AuthState} from './AuthContext';

/**
 * Tipos de Acciones de AuthAction
 */
type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'};
/**
 *
 * @param state AuthState
 * @param action
 * @returns AuthState
 */
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedIn: true, userName: 'not-username-yet'};
    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload};
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
      };
    default:
      return state;
  }
};
