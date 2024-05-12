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

import TasksTableBodyRow from "./TasksTableBodyRow";

export default function TasksTable() {
  const { isLoading, data, error } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks(),
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
            <TasksTableBodyRow
              key={data.id}
              id={data.id}
              name={data.name}
              completed={data.completed}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
