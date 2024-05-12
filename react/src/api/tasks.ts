import { getToken } from "../utils/token";

const DEV_BASE_URL = "http://127.0.0.1:3000/api/v1";

export async function getAllTasks() {
  const response = await fetch(DEV_BASE_URL + "/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  }

  const result = await response.json();

  return result;
}

export async function createTask(name: string) {
  try {
    const response = await fetch(DEV_BASE_URL + "/tasks", {
      method: "POST",
      body: JSON.stringify({ task: { name } }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (!response.ok) {
      throw new Response(response.statusText, { status: response.status });
    }

    const result = await response.json();

    return result;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
}

export async function updateTask(
  id: number,
  name?: string,
  completed?: boolean,
) {
  try {
    const response = await fetch(DEV_BASE_URL + `/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        task: { ...(name && { name }), ...(completed && { completed }) },
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (!response.ok) {
      throw new Response(response.statusText, { status: response.status });
    }

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

    if (!response.ok) {
      throw new Response(response.statusText, { status: response.status });
    }
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

    if (!response.ok) {
      throw new Response(response.statusText, { status: response.status });
    }
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
}
