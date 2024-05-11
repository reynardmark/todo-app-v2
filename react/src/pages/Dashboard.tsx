import { CircularProgress, Stack } from "@mui/material";
import { DashboardPaper } from "../components";
import { useQuery } from "react-query";
import { getAllTasks } from "../api/tasks";

interface Task {
  id: number;
  user_id: number;
  name: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export default function Dashboard() {
  const { isLoading, error, data } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks(),
  });

  const countCompletedTasks = () => {
    console.log(data);
    return data?.filter((task) => task.completed).length ?? 0;
  };

  const countNotCompletedTasks = () => {
    return (data?.length ?? 0) - countCompletedTasks();
  };

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
