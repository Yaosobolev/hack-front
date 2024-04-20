import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <header className="bg-white ">
      <div className="flex max-w-screen-xl mx-auto justify-between items-center p-4  ">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Header</h1>
        <div className="relative">
          <div className="flex items-center gap-x-1" onClick={toggleProfile}>
            Alex
            <img
              src="../../public/image 1.png"
              alt=""
              className="w-10 h-10 rounded-full mr-2"
            />
          </div>
          {isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 ">
              <Link
                to={"./profile"}
                // onClick={handleProfileClick}
                className="block text-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={toggleProfile}
              >
                Перейти в профиль
              </Link>
              <button
                // onClick={handleLogoutClick}
                className="block mx-auto py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Выйти из аккаунта
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
