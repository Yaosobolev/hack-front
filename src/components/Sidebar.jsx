import { Link } from "react-router-dom";

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 flex-shrink-0 bg-white rounded-2xl  lg:static lg:inset-auto lg:translate-x-0 transition-transform duration-200 ease-in-out transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b  border-gray-200">
        <h2 className="text-lg font-semibold">Logo</h2>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="py-4">
        <ul>
          <Link
            to={"../"}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Главная
          </Link>
          <Link
            to={"../post"}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Лента
          </Link>
          <Link
            to={"../rating"}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Рейтинг
          </Link>
          <Link
            to={"../profile"}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Личный кабинет
          </Link>
          <Link
            to={"../profile-university"}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Личный кабинет вуза
          </Link>
        </ul>
      </nav>
    </div>
  );
};
