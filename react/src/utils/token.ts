function getToken(): string | null {
  return localStorage.getItem("tkn");
}

function setToken(value: string): void {
  localStorage.setItem("tkn", value);
}

function removeToken(): void {
  localStorage.removeItem("tkn");
}

function isLoggedIn(): boolean {
  return !!getToken();
}

export { getToken, setToken, removeToken, isLoggedIn };
