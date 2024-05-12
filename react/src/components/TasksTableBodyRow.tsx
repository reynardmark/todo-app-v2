import {
  Box,
  Chip,
  TableRow,
  TableCell,
  IconButton,
  TextField,
} from "@mui/material";
import { CheckCircle, Delete, Edit } from "@mui/icons-material";
import { useMutation, useQueryClient } from "react-query";
import { updateTask, deleteTask } from "../api/tasks";
import { useForm } from "react-hook-form";
import { useToggle } from "../hooks";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Task from "../types/task";

interface EditTaskFormValue {
  name: string;
}

const schema = z.object({
  name: z.string().min(1, "must have a value"),
});

export default function TasksTableBodyRow({
  id,
  name,
  completed,
}: Pick<Task, "id" | "completed" | "name">) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  const queryClient = useQueryClient();

  const { mutate: completeTask } = useMutation({
    mutationFn: (id: number) => updateTask(id, undefined, true),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const { mutate: destroyTask } = useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const { mutate: editTaskName } = useMutation({
    mutationFn: (name: string) => updateTask(id, name, undefined),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const { register, handleSubmit, formState } = useForm<EditTaskFormValue>({
    defaultValues: {
      name,
    },
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = ({ name }: EditTaskFormValue) => {
    toggleIsEditing();
    editTaskName(name);
  };

  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell width={"250px"}>
        {isEditing ? (
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("name")}
              variant="standard"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Box>
        ) : (
          name
        )}
      </TableCell>
      <TableCell align="center">
        {completed ? (
          <Chip label="Completed" color="success" />
        ) : (
          <Chip label="Not completed" />
        )}
      </TableCell>
      <TableCell align="center">
        {!completed && (
          <>
            <IconButton onClick={() => completeTask(id)}>
              <CheckCircle />
            </IconButton>
            {!isEditing && (
              <IconButton onClick={toggleIsEditing}>
                <Edit />
              </IconButton>
            )}
          </>
        )}

        <IconButton onClick={() => destroyTask(id)}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
