import { useEffect } from "react";
import { Stack } from "@mui/material";
import { useQuery } from "react-query";
import { postsQuery } from "../routes/sample";

export default function Task() {
  useEffect(() => {
    //if not logged in
    //react router function (REMEMBER: "WHEN" - react router) ("HOW" - react query)
    //redirect to /login
  }, []);

  const query = useQuery(postsQuery());

  return (
    <Stack>
      <ul>
        {query.data?.map((datum) => {
          return (
            <li key={datum.id}>
              {datum.title} - {datum.body}
            </li>
          );
        })}
      </ul>
    </Stack>
  );
}
