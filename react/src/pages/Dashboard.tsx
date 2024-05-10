import { Stack } from "@mui/material";
import { DashboardPaper } from "../components";

export default function Dashboard() {
  return (
    <Stack
      direction="row"
      spacing={2}
      useFlexGap
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      flexWrap="wrap"
      padding={4}
    >
      <DashboardPaper count={2} title="All Tasks" />
      <DashboardPaper count={12} title="Incomplete Tasks" />
      <DashboardPaper count={25} title="Completed Tasks" />
    </Stack>
  );
}
