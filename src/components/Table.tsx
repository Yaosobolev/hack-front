import React from "react";
import * as Api from "../api";
import { checkAuth } from "../utils/checkAuth";

type Props = {
  title: string;
  university_id: number;
};

const Table: React.FC<Props> = ({ title, university_id }) => {
  checkAuth(true);
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await Api.events.getAllByUniversity(university_id);

      setEvents(data);
    })();
  }, []);

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Таблица {title}</h1>
      <div className="w-full mt-4 flex flex-col">
        {events.map((el, key) => (
          <div key={key} className="w-full p-4">
            <p>{key + 1}</p>
            {/* <h1>{el?.name}</h1> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
