import React from "react";
import { Link } from "react-router-dom";
import { IUniversity } from "../api/interface/IUniversity";
import Table from "../components/Table";

type Params = {
  university: IUniversity;
};

const UniversityInfo: React.FC<Params> = ({ university }) => {
  const [showTable, setShowTable] = React.useState(false);

  return (
    <div className="w-full h-full">
      <div className="min-h-44 flex flex-row w-full">
        <div className="flex flex-col">
          <img
            className="w-60 h-40"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cd/University-of-Alabama-EngineeringResearchCenter-01.jpg"
            alt=""
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600">
            <Link className="w-full " to={`/events/${university.id}`}>
              Создать событие
            </Link>
          </button>
          <button
            onClick={() => setShowTable((prev) => !prev)}
            className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
          >
            <p className="w-full">Просмотреть событии</p>
          </button>
        </div>

        <div className="w-full h-full px-4 flex flex-col items-start justify-start">
          <h1 className="text-3xl">{university.name}</h1>
          <div className="max-h-40 overflow-y-scroll">
            <p>{university.content}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        {showTable && (
          <Table title="мероприятий" university_id={university.id} />
        )}
      </div>
    </div>
  );
};

export default UniversityInfo;
