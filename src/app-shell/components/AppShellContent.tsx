import { Box, Toolbar } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const AppShellContent: FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Outlet />
    </Box>
  );
};

export default AppShellContent;
