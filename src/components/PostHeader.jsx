import React from "react";

export const PostHeader = () => {
  return (
    <div className="bg-white rounded">
      <div className="max-w-sm">
        {/* <div className="relative"> */}
        <div className="relative">
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
            className="mt-1  block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-3 pt-4"
            type="text"
            defaultValue=""
            name="seatch"
          />
          <label
            className="absolute  start-10  text-black transition-all duration-300"
            htmlFor="seatch"
          >
            Введите
          </label>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};
