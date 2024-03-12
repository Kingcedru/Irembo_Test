import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BusinessOwner from "./components/BusinessOwner";

function App() {
  return (
    <div className="w-5/6 shadow-2xl px-2">
      <BusinessOwner />
    </div>
  );
}

export default App;
