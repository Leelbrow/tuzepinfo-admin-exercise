import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const AppShellHeader: FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="h1">
          Tüzépinfó admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppShellHeader;
