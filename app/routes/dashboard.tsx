import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      Hey, welcome to the dashboard!
      <Outlet />
    </div>
  );
}
