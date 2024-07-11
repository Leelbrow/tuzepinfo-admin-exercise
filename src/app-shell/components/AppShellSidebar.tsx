import { Box, Drawer, List, Toolbar } from "@mui/material";
import { FC } from "react";
import menuItems from "../menu-items";
import MenuItem from "./MenuItem";

const width = 240;

const AppShellSidebar: FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => (
            <MenuItem key={item.url} {...item} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default AppShellSidebar;
