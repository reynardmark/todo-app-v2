import { setToken } from "../utils/token";

const DEV_BASE_URL = "http://127.0.0.1:3000";

export async function createUser(
  username: string,
  password: string,
  passwordConfirmation: string,
) {
  try {
    const response = await fetch(DEV_BASE_URL + "/create-account", {
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
  token?: string;
  result?: { success: string };
}

export async function loginUser(
  username: string,
  password: string,
): Promise<LoginUserResponse | void> {
  try {
    const response = await fetch(DEV_BASE_URL + "/login", {
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
    const response = await fetch(DEV_BASE_URL + "/logout");

    const result = await response.json();

    setToken("");

    return result;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
}
