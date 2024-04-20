import React from "react";

export const FilterInput = ({
  selectName,
  title,
  items,
  selectedItems,
  handleChange,
  handleRemove,
}) => {
  return (
    <div className="w-64">
      <select
        value={selectedItems[selectName]}
        onChange={(e) => handleChange(e, selectName)}
        className="py-2 ps-4 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      >
        <option hidden>Выберите {title}</option>
        {items.map((el, index) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          );
        })}
      </select>
      <div className="flex flex-wrap  ">
        {selectedItems[selectName] &&
          selectedItems[selectName].map((item, index) => (
            <span
              key={index}
              className="bg-gray-300 p-1 m-1 flex items-center rounded cursor-pointer  "
              // onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              {item}
              {/* {hoveredIndex === index && ( */}
              <svg
                className="h-4 w-4 block  m-0 cursor-pointer text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => handleRemove(selectName, item)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              {/* )} */}
            </span>
          ))}
      </div>
    </div>
  );
};
