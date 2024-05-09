import { Divider, Paper, Stack, Typography } from "@mui/material";
import { DashboardPaper } from "../components";

export default function Dashboard() {
  return (
    <Stack
      direction="row"
      spacing={3}
      justifyContent="center"
      textAlign="center"
    >
      <DashboardPaper count={2} title="All Tasks" />
      <DashboardPaper count={12} title="Incomplete Tasks" />
      <DashboardPaper count={25} title="Completed Tasks" />
    </Stack>
  );
}
