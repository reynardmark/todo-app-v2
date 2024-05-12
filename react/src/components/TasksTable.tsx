import { CheckCircle, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAllTasks, updateTask, deleteTask } from "../api/tasks";
import Task from "../types/task";

export default function TasksTable() {
  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks(),
  });

  const { mutate: completeTask } = useMutation({
    mutationFn: (id: number) => updateTask(id, undefined, true),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const { mutate: destroyTask } = useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    throw new Error("Something went wrong. You may try again.");
  }

  if (data?.length === 0) {
    return (
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, textAlign: "center", mt: 2 }}
      >
        No task added.
      </Typography>
    );
  }

  return (
    <TableContainer sx={{ maxHeight: "720px" }}>
      <Table sx={{ minWidth: 500, marginBottom: 2 }} aria-label="tasks table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((data) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell width={"250px"}>{data.name}</TableCell>
              <TableCell align="center">
                {data.completed ? (
                  <Chip label="Completed" color="success" />
                ) : (
                  <Chip label="Not completed" />
                )}
              </TableCell>
              <TableCell align="center">
                {!data.completed && (
                  <>
                    <IconButton onClick={() => completeTask(data.id)}>
                      <CheckCircle />
                    </IconButton>
                    <IconButton>
                      <Edit />
                    </IconButton>
                  </>
                )}

                <IconButton onClick={() => destroyTask(data.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
