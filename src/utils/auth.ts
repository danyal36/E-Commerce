export const user = null;

export const getUserToken = () => localStorage.getItem('token');

export const getUser = () => {
  const localUser = localStorage.getItem('user');
  return localUser && JSON.parse(localUser);
};

export const setPageTitle = (title: string) => {
  localStorage.setItem('pageTitle', title);
};
export const setUserToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const setUser = (localUser: object) => {
  localStorage.setItem('user', JSON.stringify(localUser));
};

export const removeUserToken = () => {
  localStorage.removeItem('token');
};

export const removeUser = () => {
  localStorage.removeItem('user');
};

export const removeAuth = () => {
  removeUserToken();
  removeUser();
};
