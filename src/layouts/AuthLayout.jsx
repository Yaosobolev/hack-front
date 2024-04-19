import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-amber-100">
      <div className="  max-w-2xl w-full p-8 m-2 bg-white rounded shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
