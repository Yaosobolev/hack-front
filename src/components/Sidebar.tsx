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

const getUniversityId = (user) => {
  let id = "create-university";
  if (user.TYPE === "DELEGATE") {
    if (user.university.id) {
      id = user.university.id;
    }
    return id;
  }

  const flow = user?.group?.flow;
  const department = flow?.department;
  const faculty = department?.faculty;
  const university = faculty?.university;

  return university?.id;
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const user = useSelector(SelectUser);

  const university_id = getUniversityId(user);

  return (
    <>
      <div className=" bg-gradient-to-tl from-violet-600 to-violet-500 bg-cover bg-center py-2 divide-violet-400 divide-y-2 rounded">
        <div className="text-white">
          <Link
            to={`/profile/${user.id}`}
            className="flex items-center gap-2 px-4 py-2"
          >
            <CgProfile /> ПРОФИЛЬ
          </Link>
        </div>

        <div className="text-white">
          <Link to="/post" className="flex items-center gap-2 px-4 py-2">
            <RiNewsLine />
            <span>НОВОСТИ</span>
          </Link>
        </div>

        <div className="text-white">
          <Link to="/rating" className="flex items-center gap-2 px-4 py-2">
            <MdOutlineLeaderboard />
            <span>РЕЙТИНГИ</span>
          </Link>
        </div>

        <div className="text-white">
          <Link
            to="/profile-university/1"
            className="flex items-center gap-2 px-4 py-2"
          >
            <FaUniversity /> МОЙ ВУЗ
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
