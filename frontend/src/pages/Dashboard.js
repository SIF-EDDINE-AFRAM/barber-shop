import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <SidebarAdmin />

      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet /> 
      </div>
    </div>
  );
}
