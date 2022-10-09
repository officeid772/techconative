import React from "react";
import "../App.css";
import Stack from "@mui/material/Stack";
import SlideMenu from "./SlideMenu";
import { useNavigate } from "react-router";
function Header() {
  const nav = useNavigate();
  return (
    <Stack className="header">
      <Stack spacing={5} direction="row">
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
        <Stack className="header-content-smenu">
          <SlideMenu />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
