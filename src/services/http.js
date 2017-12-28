export const readJSON = response => response.json()

export const fetchWith = (url, options = {}) => fetch(encodeURI(url), {
  ...options
})