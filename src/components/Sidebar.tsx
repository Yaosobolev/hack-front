import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RiNewsLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectUser } from "../redux/user/selector";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { id } = useSelector(SelectUser);

  return (
    <div
      className={` inset-y-0 left-0 z-40 fixed bg-white rounded-2xl lg:static lg:inset-auto lg:translate-x-0 transition-transform duration-200 ease-in-out transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center px-2 border-b border-gray-200">
        <Link to="/" className="px-4 py-2 text-gray-700 cursor-pointer text-xl">
          Главная
        </Link>
      </div>
      <nav>
        <ul className="*:flex *:flex-row *:items-center *:px-4 *:py-2 *:text-gray-700  *:cursor-pointer *:text-lg">
          <Link to="/post" className="hover:bg-gray-100 m-0">
            <RiNewsLine className="mr-1" /> Лента
          </Link>
          <Link to="/rating" className="hover:bg-gray-100">
            <MdOutlineLeaderboard className="mr-1" /> Рейтинг
          </Link>
          <Link to={`/profile/${id}`} className="hover:bg-gray-100">
            <CgProfile className="mr-1" /> Личный кабинет
          </Link>

          <Link to="/profile-university/1" className="hover:bg-gray-100">
            <FaUniversity className="mr-1" /> Мой вуз
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
