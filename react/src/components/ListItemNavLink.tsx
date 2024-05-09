import { NavLink } from "react-router-dom";

import { ListItemButton } from "@mui/material";

interface ListItemNavLinkProps {
  to: string;
}

export default function ListItemNavLink({ to }: ListItemNavLinkProps) {
  return <ListItemButton LinkComponent={NavLink} to={to}></ListItemButton>;
}
