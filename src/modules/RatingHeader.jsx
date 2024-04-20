import React, { useState } from "react";
import {
  university,
  city,
  faculty,
  flow,
  department,
  group,
  section,
} from "../TESTDATA/Post";
import { FilterInput } from "../components";

export const RatingHeader = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleChange = (event, selectName) => {
    const { value } = event.target;
    if (
      !selectedItems[selectName] ||
      !selectedItems[selectName].includes(value)
    ) {
      setSelectedItems({
        ...selectedItems,
        [selectName]: [...(selectedItems[selectName] || []), value],
      });
    }
  };

  const handleRemove = (selectName, itemToRemove) => {
    setSelectedItems({
      ...selectedItems,
      [selectName]: selectedItems[selectName].filter(
        (item) => item !== itemToRemove
      ),
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    setSelectedValue(value);
  };

  return (
    <div className="relative p-4 bg-white rounded-2xl  ">
      <div className="flex flex-col">
        <form onSubmit={handleForm}>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
              <svg
                className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <input
              className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              type="text"
              placeholder="Введите"
            />
          </div>

          <div className="flex flex-col gap-y-2 mb-4">
            <FilterInput
              selectName="city"
              title="Город"
              items={city}
              selectedItems={selectedItems}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              selectName="university"
              title="ВУЗ"
              items={university}
              selectedItems={selectedItems}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              selectName="faculty"
              title="Факультет"
              items={faculty}
              selectedItems={selectedItems}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              selectName="flow"
              title="Поток"
              items={flow}
              selectedItems={selectedItems}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              selectName="department"
              title="Кафедру"
              items={department}
              selectedItems={selectedItems}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              selectName="group"
              title="Группу"
              items={group}
              selectedItems={selectedItems}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
            <FilterInput
              selectName={section.name}
              title={section.title}
              items={section.items}
              selectedItems={selectedItems}
              handleChange={handleChange}
              handleRemove={handleRemove}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Найти
          </button>
        </form>
      </div>
    </div>
  );
};
