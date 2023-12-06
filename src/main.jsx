import React from "react";
import ReactDOM from "react-dom/client";
import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Editor />
    <Preview />
  </React.StrictMode>
);
