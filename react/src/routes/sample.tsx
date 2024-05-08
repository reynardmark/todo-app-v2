import { Query, QueryClient } from "react-query";
import { useLoaderData } from "react-router-dom";

export async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Error!");
    }

    const result = await response.json();

    return result;
  } catch (e) {
    alert(e);
  }
}
//sample caching and fetching

export const postsQuery = () => ({
  queryKey: ["posts"],
  queryFn: getPosts,
});

export const postsLoader = (queryClient: QueryClient) => {
  return async () => {
    const query = postsQuery();

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
};
