import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItemData } from "../app-shell.types";

interface Props extends MenuItemData {}

const MenuItem: FC<Props> = ({ name, icon, url: path }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(path);
  }, [navigate, path]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
