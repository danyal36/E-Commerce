import { createContext, useReducer, Dispatch, ReactNode, useMemo } from 'react';
import { userReducer, loaderReducer, authReducer, ActionTypes, UserType } from './reducers';

type InitialStateType = {
  user: UserType;
  isLoading: boolean;
  checkingAuth: boolean;
};

const initialState = {
  user: {
    id: 0,
    username: '',
    companyId: null,
    authenticated: false,
  },
  isLoading: false,
  checkingAuth: false,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ user, isLoading, checkingAuth }: InitialStateType, action: ActionTypes) => ({
  user: userReducer(user, action),
  isLoading: loaderReducer(isLoading, action),
  checkingAuth: authReducer(checkingAuth, action),
});

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
