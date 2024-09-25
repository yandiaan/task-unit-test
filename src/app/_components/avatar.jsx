import React from "react";

const Avatar = ({ text }) => {
  return (
    <div className="flex items-center w-fit gap-4">
      <div className="bg-gray-800 text-white cursor-pointer p-2 rounded-full h-12 w-12 flex justify-center items-center">
        {text.charAt(0).toUpperCase()}
      </div>
      <h1>{text}</h1>
    </div>
  );
};

export default Avatar;
