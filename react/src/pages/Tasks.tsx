import { Box, Button, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import TasksTable from "../components/TasksTable";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTask, deleteAllTasks } from "../api/tasks";
import { useMutation, useQueryClient } from "react-query";

interface TaskFormValue {
  name: string;
}

const schema = z.object({
  name: z.string().min(1, "must have a value"),
});

export default function Tasks() {
  const { register, formState, handleSubmit, reset } = useForm<TaskFormValue>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate: addTask } = useMutation({
    mutationFn: (name: string) => createTask(name),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const { mutate: deleteTasks } = useMutation({
    mutationFn: () => deleteAllTasks(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const onSubmit = ({ name }: TaskFormValue) => {
    addTask(name);
    reset();
  };

  return (
    <Paper sx={{ p: 4 }} elevation={2}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        columnGap={4}
        flexWrap="wrap"
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            {...register("name")}
            variant="standard"
            id="add"
            type="text"
            label="Add task"
            helperText={errors.name ? errors.name.message : " "}
            error={!!errors.name}
            autoComplete="off"
          />
        </Box>
        <Button variant="contained" size="small" onClick={() => deleteTasks()}>
          Clear all
        </Button>
      </Box>

      <TasksTable />
    </Paper>
  );
}
