export const getToken = () => {
  return localStorage.getItem('jinshan_edu_token') || '';
};

export const setToken = (token?: string) => {
  localStorage.setItem('jinshan_edu_token', token || '');
};
