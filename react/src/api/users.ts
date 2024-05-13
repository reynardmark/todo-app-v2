import { setToken } from "../utils/token";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function createUser(
  username: string,
  password: string,
  passwordConfirmation: string,
) {
  try {
    const response = await fetch(BASE_URL + "/create-account", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        "password-confirm": passwordConfirmation,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
}

export interface LoginUserResponse {
  token: string;
  result: { success: string };
}

export async function loginUser(
  username: string,
  password: string,
): Promise<LoginUserResponse | void> {
  try {
    const response = await fetch(BASE_URL + "/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    const token = response.headers.get("Authorization")!;

    return { token, result };
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
}

export async function logoutUser() {
  try {
    const response = await fetch(BASE_URL + "/logout");

    const result = await response.json();

    setToken("");

    return result;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
}
