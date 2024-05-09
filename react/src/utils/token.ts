function getToken() {
  return localStorage.getItem("tkn");
}

function setToken(value: string) {
  localStorage.setItem("tkn", value);
}

function removeToken() {
  localStorage.removeItem("tkn");
}

export { getToken, setToken, removeToken };
