import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark bg-amber-100 h-screen ">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="max-w-screen-xl mx-auto flex flex-1 h-[calc(100%-100px)]">
        <div className=" overflow-hidden mt-7  flex flex-1 ">
          <div className="relative flex flex-1 flex-row overflow-y-auto overflow-x-hidden">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <main className="flex-1 max-w-screen-xl">
              {/* <div className="flex justify-center h-full"> */}
              {/* mx-2 p-4 md:p-6 2xl:p-10 */}
              <div className="mx-4">
                <Outlet />
              </div>
              {/* </div> */}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
