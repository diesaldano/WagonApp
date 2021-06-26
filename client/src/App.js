import { useEffect } from "react";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
  useEffect(() => {
    console.log("hello world");
  }, []);
  return (
    <div className="">
      <NavBar />
    </div>
  );
}

export default App;
