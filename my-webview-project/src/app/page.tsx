import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MasterGoalScreen } from "../screens/MasterGoalScreen";  // เปลี่ยนจาก "./screens" เป็น "../screens"

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MasterGoalScreen />
  </StrictMode>,
);