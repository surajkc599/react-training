import { createRoot } from "react-dom/client";
import { App } from "./App";

// Always makes sure element presents!
const domNode = document.getElementById("root")!;
const root = createRoot(domNode);

root.render(<App />);
