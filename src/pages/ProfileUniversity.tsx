import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Api from "../api";
import { IUniversity } from "../api/interface/IUniversity";
import CreateUniversity from "../components/CreateUniversity";
import { SelectUser } from "../redux/user/selector";
import { checkAuth } from "../utils/checkAuth";

const ProfileUniversity = () => {
  const { id } = useParams();

  const user = useSelector(SelectUser);
  checkAuth(true);
  console.log(user);
  const [university, setUniversity] = React.useState<IUniversity>({
    name: "",
    city_id: 0,
    delegate_id: 0,
    content: "",
    id: 0,
  });
  const [isOwner, setIsOwner] = React.useState(true);

  React.useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const { data } = await Api.university.get(Number(id));

        if (data.delegate_id === parseInt(user.id)) {
          setIsOwner(true);
        }

        setUniversity(data);
      } catch (error) {
        throw new Error("University not found " + error);
      }
    };

    fetchUniversity();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg relative flex justify-center">
      {/* <div className="flex flex-row">
        <img
          src="https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg"
          className="w-60 h-32"
          alt=""
        />
        <ul className="ml-4">
          <div>
            <h2>Название</h2>
            <h1 className="">{university.name}</h1>
          </div>
        </ul>
      </div> */}

      <CreateUniversity />
    </div>
  );
};

export default ProfileUniversity;
