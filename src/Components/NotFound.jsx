import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const nav = useNavigate();
  setTimeout(() => {
    nav("/");
    //use nav(-1) for going to prev page
  }, 2000);
  return (
    <div>
      <h1>Page not found Navigating to Home Page</h1>
    </div>
  );
}

export default NotFound;
