import { Box, Paper, Pagination, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import TasksTable from "../components/TasksTable";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTask } from "../api/tasks";

interface TaskFormValue {
  name: string;
}

const schema = z.object({
  name: z.string().min(1, "must have a value"),
});

export default function Tasks() {
  const { register, formState, handleSubmit } = useForm<TaskFormValue>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = ({ name }: TaskFormValue) => {
    console.log(name);
  };

  return (
    <Paper sx={{ p: 4, paddingX: 8 }} elevation={2}>
      <Box
        component="form"
        display="flex"
        justifyContent="center"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
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

      <TasksTable />
    </Paper>
  );
}
