import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


//pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Player from "./pages/Player";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Player-Info" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
