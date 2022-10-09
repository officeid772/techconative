import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

export default function SlideMenu() {
  const [state, setState] = useState(false);
  const nav = useNavigate();
  const toggleDrawer = (open) => {
    setState(open);
  };

  const box = (
    <Box sx={{ width: "280px" }} onClick={() => toggleDrawer(false)}>
      <Stack spacing={3} direction="column" className="slide-menu">
        <img
          onClick={() => nav("/")}
          className="logo"
          src="https://techconative.com/images/contact/TC_Logo_Horizontal_White2.png"
          alt="Techconative"
        />
        <Stack className="header-content" onClick={() => nav("/quote")}>
          Quotes
        </Stack>
        <Stack className="header-content" onClick={() => nav("/image")}>
          Images
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <>
      <MenuIcon onClick={() => toggleDrawer(true)} />
      <Drawer open={state} onClose={() => toggleDrawer(false)}>
        {box}
      </Drawer>
    </>
  );
}
