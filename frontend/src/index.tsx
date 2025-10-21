import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MasterGoalScreen } from "./screens/MasterGoalScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MasterGoalScreen />
  </StrictMode>,
);
