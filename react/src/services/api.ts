const DEV_BASE_URL = "http://127.0.0.1:3000";

export async function createAccount(email, password, passwordConfirmation) {
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

  try {
    await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return;
  } catch (e) {
    console.log(e.message);
  }
}
