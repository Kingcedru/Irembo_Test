import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BusinessOwner from "./components/BusinessOwner";
import BusinessDetails from "./components/BusinessDetails";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <div className="flex flex-col gap-10 m-20 w-5/6 shadow-2xl px-2">
      <BusinessOwner />
      <BusinessDetails/>
      <ProductInfo/>
    </div>
  );
}

export default App;
