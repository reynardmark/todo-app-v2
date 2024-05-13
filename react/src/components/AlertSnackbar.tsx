import { Alert, AlertColor, Snackbar } from "@mui/material";

interface anchorOrigin {
  vertical: "top" | "bottom";
  horizontal: "left" | "right" | "center";
}

interface AlertSnackbarProps {
  alertText: string;
  open: boolean;
  position: anchorOrigin;
  severity: AlertColor;
  setIsSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertSnackbar({
  alertText,
  open: isSnackbarOpen,
  position,
  severity,
  setIsSnackbarOpen,
}: AlertSnackbarProps) {
  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={8000}
      onClose={() => setIsSnackbarOpen(!isSnackbarOpen)}
      anchorOrigin={position}
    >
      <Alert
        onClose={() => setIsSnackbarOpen(!isSnackbarOpen)}
        severity={severity}
        variant="filled"
      >
        {alertText}
      </Alert>
    </Snackbar>
  );
}
