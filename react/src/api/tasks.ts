import { getToken } from "../utils/token";

const DEV_BASE_URL = "http://127.0.0.1:3000/api/v1";

export async function getAllTasks() {
  try {
    const response = await fetch(DEV_BASE_URL + "/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
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

export async function createTask(name: string) {
  try {
    const response = await fetch(DEV_BASE_URL + "/tasks", {
      method: "POST",
      body: JSON.stringify({ tasks: { name } }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
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

export async function updateTask(name?: string, completed?: boolean) {
  try {
    const response = await fetch(DEV_BASE_URL + "/tasks", {
      method: "PATCH",
      body: JSON.stringify({
        tasks: { ...(name && { name }), ...(completed && { completed }) },
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
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

export async function deleteTask(id: number) {
  try {
    const response = await fetch(DEV_BASE_URL + `/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
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

export async function deleteAllTasks() {
  try {
    const response = await fetch(DEV_BASE_URL + `/tasks`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
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
