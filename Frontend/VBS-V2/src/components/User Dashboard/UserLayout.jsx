import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

function UserLayout() {
  return (
    <section className="dashboard">

      <Sidebar />

      <main className="dashboard-main">
        <Outlet />
      </main>

    </section>
  );
}

export default UserLayout;