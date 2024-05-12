import { CheckCircle, Delete, Edit } from "@mui/icons-material";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
} from "@mui/material";
import { useQuery } from "react-query";
import { getAllTasks } from "../api/tasks";
import Task from "../types/task";

export default function TasksTable() {
  const { isLoading, error, data } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks(),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer>
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
              <TableCell>{data.name}</TableCell>
              <TableCell align="center">
                {data.completed ? (
                  <Chip label="Completed" color="success" />
                ) : (
                  <Chip label="Not completed" />
                )}
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <CheckCircle />
                </IconButton>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
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
