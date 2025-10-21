import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MasterGoalScreen } from "./screens/MasterGoalScreen";
import "../tailwind.css"; // เพิ่มบรรทัดนี้

createRoot(document.getElementById("root") as HTMLElement).render( // เปลี่ยนจาก "app" เป็น "root"
  <StrictMode>
    <MasterGoalScreen />
  </StrictMode>,
);