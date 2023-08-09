// eslint-disable-next-line
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
};

export enum Types {
  Create = 'CREATE_USER',
  Delete = 'DELETE_USER',
  Authenticate = 'AUTH_USER',
  Loading = 'LOADING',
}

export type ActionTypes = UserActions | LoadingActions | AuthActions;

// User

export type UserType = {
  id: number;
  username: string;
  companyId: number | null;
  authenticated: boolean;
};

type UserPayload = {
  [Types.Create]: {
    id: number;
    username: string;
    companyId: number | null;
    authenticated: boolean;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (state: UserType, action: ActionTypes) => {
  switch (action.type) {
    case Types.Create:
      return {
        id: action.payload.id,
        username: action.payload.username,
        companyId: action.payload.companyId,
        authenticated: action.payload.authenticated,
      };
    case Types.Delete:
      return {
        id: 0,
        username: '',
        companyId: null,
        authenticated: false,
      };
    default:
      return state;
  }
};

// Loader

type LoadingPayload = {
  [Types.Loading]: boolean;
};

export type LoadingActions = ActionMap<LoadingPayload>[keyof ActionMap<LoadingPayload>];

export const loaderReducer = (state: boolean, action: ActionTypes) => {
  switch (action.type) {
    case Types.Loading:
      return action.payload;
    default:
      return state;
  }
};

// Auth

type AuthPayload = {
  [Types.Authenticate]: boolean;
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

export const authReducer = (state: boolean, action: ActionTypes) => {
  switch (action.type) {
    case Types.Authenticate:
      return action.payload;
    default:
      return state;
  }
};
