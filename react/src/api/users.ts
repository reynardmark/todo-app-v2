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

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e.message);
  }
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(DEV_BASE_URL + "/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
