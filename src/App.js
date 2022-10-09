import React from "react";
import { Route, Routes } from "react-router";
import Footer from "./Components/Footer ";
import Header from "./Components/Header";
import Images from "./Components/Images";
import LandingPage from "./Components/LandingPage";
import NotFound from "./Components/NotFound";
import Quotes from "./Components/Quotes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="/image" element={<Images />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
