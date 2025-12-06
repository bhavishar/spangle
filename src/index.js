import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // global reset + fonts if needed

const root = createRoot(document.getElementById("root"));
root.render(<App />);
