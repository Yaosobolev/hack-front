import React from "react";
import { Link } from "react-router-dom";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (ev: MouseEvent) => {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        toggleProfile();
        console.log();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

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
        <h1 className="text-lg font-semibold">Lifecourse</h1>
        <div className="relative">
          <div
            className="flex items-center gap-x-1 cursor-pointer"
            onClick={toggleProfile}
          >
            Daniel Brekker
            <img
              src="../../public/image 1.png"
              alt=""
              className="w-10 h-10 rounded-full mr-2"
            />
          </div>
          {isOpen && (
            <div
              ref={ref}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 "
            >
              <Link
                to="/profile"
                className="block text-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-full"
                onClick={toggleProfile}
              >
                Перейти в профиль
              </Link>
              <button className="block mx-auto py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full h-full">
                Выйти из аккаунта
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
