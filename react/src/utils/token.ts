function getToken() {
  return localStorage.getItem("tkn");
}

function setToken(value: string) {
  return localStorage.setItem("tkn", value);
}

export { getToken, setToken };
