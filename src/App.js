import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 120 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
