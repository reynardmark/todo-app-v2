import { CircularProgress, Stack } from "@mui/material";
import { DashboardPaper } from "../components";
import { useQuery } from "react-query";
import { getAllTasks } from "../api/tasks";
import Task from "../types/task";

export default function Dashboard() {
  const { isLoading, error, data } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks(),
  });

  const countCompletedTasks = () => {
    return data?.filter((task) => task.completed).length ?? 0;
  };

  const countNotCompletedTasks = () => {
    return (data?.length ?? 0) - countCompletedTasks();
  };

  if (error) {
    throw new Error("Something went wrong. Please login again.");
  }

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
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <DashboardPaper count={data?.length ?? 0} title="All Tasks" />
          <DashboardPaper
            count={countNotCompletedTasks()}
            title="Incomplete Tasks"
          />
          <DashboardPaper
            count={countCompletedTasks()}
            title="Completed Tasks"
          />
        </>
      )}
    </Stack>
  );
}
