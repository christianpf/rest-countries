import React from "react";

export const CustomButton = ({ children, onClick }) => {
  return (
    <button
      className="flex items-center font-regular text-md gap-2 p-2  border-2 rounded-xl border-gray-400 hover:bg-primary-200 hover:text-dark-400 hover:dark:bg-white hover:dark:text-primary-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
