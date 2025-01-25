// Header

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Untitled Project</h1>
        <button className="bg-red-500 px-4 py-2 rounded-lg">Log Out</button>
      </div>
    </header>
  );
};

export default Header;