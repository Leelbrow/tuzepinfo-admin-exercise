import { Box } from "@mui/material";
import { FC } from "react";
import AppShellContent from "./components/AppShellContent";
import AppShellHeader from "./components/AppShellHeader";
import AppShellSidebar from "./components/AppShellSidebar";

const AppShell: FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppShellHeader />
      <AppShellSidebar />
      <AppShellContent />
    </Box>
  );
};

export default AppShell;
