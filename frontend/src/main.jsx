import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import CreateGlobalStyle from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <CreateGlobalStyle />
  </>
);
