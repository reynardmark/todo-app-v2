import { getToken } from "../utils/token";

const DEV_BASE_URL = "http://127.0.0.1:3000/api/v1";

export async function createTask(name: string) {
  try {
    const response = await fetch(DEV_BASE_URL + "/tasks", {
      method: "GET",
      body: JSON.stringify(name),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken}`,
      },
    });

    const result = await response.json();

    return result;
  } catch (e) {
    alert(e.message);
  }
}
