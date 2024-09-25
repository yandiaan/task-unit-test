import React from 'react';

const Input = ({ label, type, id, name, placeholder, value, onChange, required }) => {
  return (
    <div className="mb-4 text-cyan-950  ">
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
