import React from 'react';

function Navbar({ message }) {
  return (
    <header className="bg-gray-900 text-white shadow-md border-gray-300">
      <nav className="container mx-auto flex items-center justify-center p-4">
        <h2 className="text-xl font-bold">{message}</h2>
      </nav>
    </header>
  );
}

export default Navbar;