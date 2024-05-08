import { useEffect } from "react";
import { Stack } from "@mui/material";

export default function Task() {
  useEffect(() => {
    //if not logged in
    //react router function (REMEMBER: "WHEN" - react router) ("HOW" - react query)
    //redirect to /login
  }, []);

  return <Stack>A Task</Stack>;
}
