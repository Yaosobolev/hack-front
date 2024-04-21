import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectUser } from "../redux/user/selector";
import { checkAuth } from "../utils/checkAuth";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<Props> = () => {
  checkAuth();

  const user = useSelector(SelectUser);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(user.id !== 0);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsAuth(user.id !== 0);
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

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const onExit = () => {
    setIsAuth(false);

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  console.log(user, isAuth);
  return (
    <header className="bg-white ">
      <div className="flex max-w-screen-xl mx-auto justify-between items-center p-4  ">
        <Link to="/">
          <div className="flex flex-row items-center">
            <PiStudentBold className="text-3xl mr-2" />
            <h1 className="text-2xl font-semibold">Lifecourse</h1>
          </div>
        </Link>

        {isAuth ? (
          <div className="relative">
            <div
              className="flex items-center gap-x-1 cursor-pointer"
              onClick={toggleProfile}
            >
              <h1 className="text-xl">
                {user.firstname + " " + user.lastname}
              </h1>
              <img
                src="https://images.genius.com/782d3846b72673a559ef3fcc3b48f4d9.1000x1000x1.jpg"
                alt="logo"
                className="w-10 h-10 rounded-full mr-2"
              />
            </div>
            {isOpen && (
              <div
                ref={ref}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 "
              >
                <Link
                  to={`/profile/${user.id}`}
                  className="block text-center py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-full"
                  onClick={toggleProfile}
                >
                  Перейти в профиль
                </Link>
                <button
                  onClick={onExit}
                  className="block mx-auto py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full h-full"
                >
                  Выйти из аккаунта
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-row">
            <Link
              to="/auth/login"
              className="w-auto bg-blue-500 text-white py-2 px-4 text-xl mx-2 flex flex-row items-center justify-center rounded hover:bg-blue-600"
            >
              Войти
            </Link>
            <Link
              to="/auth/register/student"
              className="w-auto bg-blue-500 text-white py-2 px-4 text-xl flex flex-row items-center justify-center rounded hover:bg-blue-600"
            >
              Зарегистрироваться
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
