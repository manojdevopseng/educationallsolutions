import DashNavbar from "@/components/DashNavbar";
import React from "react";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";

const Dashboard = async () => {
  // const session = await getServerSession();
  // if (!session) {
  //   redirect("/");
  // }
  return (
    <div className="">
      <DashNavbar />
    </div>
  );
};

export default Dashboard;