const DEV_BASE_URL = "http://127.0.0.1:3000";

export async function createUser(
  email: string,
  password: string,
  passwordConfirmation: string,
) {
  try {
    const response = await fetch(DEV_BASE_URL + "/create-account", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        "password-confirm": passwordConfirmation,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    await response.json();
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
