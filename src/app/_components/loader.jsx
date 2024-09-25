import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full mt-4 dark:text-white text-gray-800 mb-12">
      <p className="animate-pulse ml-2 text-3xl">Loading...</p>
    </div>
  );
};

export default Loader;
