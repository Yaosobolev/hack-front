import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AsyncSelect from "react-select";
import "../../App.css";
import * as Api from "../../api";
import { SelectRegistrationBlank } from "../../redux/registrationBlank/selector";

const FinalRegistration = () => {
  const navigate = useNavigate();
  const [universityInfo, setUniversityInfo] = React.useState({
    university: { name: "", id: 0 },
    faculty: { name: "", id: 0 },
    department: { name: "", id: 0 },
    flow: { name: "", id: 0 },
    group: { name: "", id: 0 },
  });
  const [universityOptions, setUniversityOptions] = React.useState({
    university: [{ label: "", value: "", id: 0 }],
    facutly: [{ label: "", value: "", id: 0 }],
    department: [{ label: "", value: "", id: 0 }],
    flow: [{ label: "", value: "", id: 0 }],
    group: [{ label: "", value: "", id: 0 }],
  });
  const registrationBlank = useSelector(SelectRegistrationBlank);

  React.useEffect(() => {
    (async () => {
      const universities = await Api.university.getAll(0, 20);

      if (universityInfo.university.id) {
        const faculties = await Api.university.getAllFaculties(
          0,
          20,
          universityInfo.university.id
        );

        const facultyOptionsMap = faculties.map((faculty) => ({
          value: faculty.name,
          label: faculty.name,
          id: faculty.id,
        }));

        setUniversityOptions((prev) => ({
          ...prev,
          facutly: facultyOptionsMap,
        }));
      }

      if (universityInfo.faculty.id) {
        const departments = await Api.university.getAllDepartments(
          0,
          20,
          universityInfo.faculty.id
        );

        const departmentsOptionsMap = departments.map((department) => ({
          value: department.name,
          label: department.name,
          id: department.id,
        }));

        setUniversityOptions((prev) => ({
          ...prev,
          department: departmentsOptionsMap,
        }));
      }

      if (universityInfo.department.id) {
        const flows = await Api.university.getAllFlows(
          0,
          20,
          universityInfo.department.id
        );

        const flowsOptionsMap = flows.map((flow) => ({
          value: flow.name,
          label: flow.name,
          id: flow.id,
        }));

        setUniversityOptions((prev) => ({
          ...prev,
          flow: flowsOptionsMap,
        }));
      }

      if (universityInfo.flow.id) {
        const groups = await Api.university.getAllGroups(
          0,
          20,
          universityInfo.flow.id
        );

        const groupsOptionsMap = groups.map((group) => ({
          value: group.name,
          label: group.name,
          id: group.id,
        }));

        setUniversityOptions((prev) => ({
          ...prev,
          group: groupsOptionsMap,
        }));
      }

      const universityOptionsMap = universities.map((university) => ({
        value: university.name,
        label: university.name,
        id: university.id,
      }));

      setUniversityOptions((prev) => ({
        ...prev,
        university: universityOptionsMap,
      }));
    })();
  }, [universityInfo]);

  const onSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const data = { ...registrationBlank, group_id: universityInfo.group.id };

      const token = await Api.auth.registerStudent(data);
      localStorage.setItem("access_token", token.data.access_token);
      localStorage.setItem("refresh_token", token.data.refresh_token);

      navigate("/");
    } catch (error) {
      throw new Error("Failed registration: " + error);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">
        Выберите свой ВУЗ и направление
      </h2>

      <form onSubmit={onSubmit}>
        <div className="relative mb-4 ">
          <AsyncSelect
            placeholder="ВУЗ"
            className="my-2"
            required
            options={universityOptions.university}
            defaultInputValue={universityInfo.university.name}
            onChange={(selectedOption) =>
              selectedOption &&
              setUniversityInfo((prev) => ({
                ...prev,
                university: {
                  name: selectedOption.value,
                  id: selectedOption.id,
                },
              }))
            }
          />
          <AsyncSelect
            placeholder="Факультет"
            className="my-2"
            required
            options={universityOptions.facutly}
            isDisabled={universityInfo.university.name.length === 0}
            defaultInputValue={universityInfo.faculty.name}
            onChange={(selectedOption) =>
              selectedOption &&
              setUniversityInfo((prev) => ({
                ...prev,
                faculty: { name: selectedOption.value, id: selectedOption.id },
              }))
            }
          />
          <AsyncSelect
            placeholder="Кафедра"
            className="my-2"
            required
            isDisabled={universityInfo.faculty.name.length === 0}
            options={universityOptions.department}
            defaultInputValue={universityInfo.department.name}
            onChange={(selectedOption) =>
              selectedOption &&
              setUniversityInfo((prev) => ({
                ...prev,
                department: {
                  name: selectedOption.value,
                  id: selectedOption.id,
                },
              }))
            }
          />
          <AsyncSelect
            placeholder="Поток"
            className="my-2"
            required
            isDisabled={universityInfo.department.name.length === 0}
            options={universityOptions.flow}
            defaultInputValue={universityInfo.flow.name}
            onChange={(selectedOption) =>
              selectedOption &&
              setUniversityInfo((prev) => ({
                ...prev,
                flow: {
                  name: selectedOption.value,
                  id: selectedOption.id,
                },
              }))
            }
          />
          <AsyncSelect
            placeholder="Группа"
            className="my-2"
            required
            isDisabled={universityInfo.flow.name.length === 0}
            options={universityOptions.group}
            defaultInputValue={universityInfo.group.name}
            onChange={(selectedOption) =>
              selectedOption &&
              setUniversityInfo((prev) => ({
                ...prev,
                group: {
                  name: selectedOption.value,
                  id: selectedOption.id,
                },
              }))
            }
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white py-2 text-xl px-4 rounded hover:bg-blue-600 flex flex-row justify-center items-center"
        >
          Зарегистрироваться
        </button>
      </form>

      <span className="text-lg">
        <Link to="/auth/register/student" className="text-blue-600">
          Вернуться назад
        </Link>
      </span>
    </>
  );
};

export default FinalRegistration;
