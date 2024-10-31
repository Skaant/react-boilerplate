import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const node = document.getElementById("app");

node && createRoot(node).render(<App />);
