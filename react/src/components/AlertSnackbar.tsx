import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

interface anchorOrigin {
  vertical: "top" | "bottom";
  horizontal: "left" | "right" | "center";
}

interface AlertSnackbarProps {
  alertText: string;
  open: boolean;
  position: anchorOrigin;
}

export default function AlertSnackbar({
  alertText,
  open,
  position,
}: AlertSnackbarProps) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={8000}
      onClose={() => setIsOpen(!isOpen)}
      anchorOrigin={position}
    >
      <Alert
        onClose={() => setIsOpen(!isOpen)}
        severity="success"
        variant="filled"
      >
        {alertText}
      </Alert>
    </Snackbar>
  );
}
