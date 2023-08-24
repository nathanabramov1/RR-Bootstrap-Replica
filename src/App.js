import { NavbarBrand } from "react-bootstrap";
import TopBar from "./TopBar";
import Background from "./Background";
import StoreListings from "./StoreListing";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      < TopBar />
      <Background />
      <StoreListings/>
    </div>
  );
}
export default App;