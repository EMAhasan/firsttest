// Navbar.tsx
import Link from 'next/link';
import React from 'react';
import UserLinks from './UserLinks';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">TODO</div>
        <div className="hidden sm:flex space-x-4">
          
          <UserLinks></UserLinks>
        </div>
        <div className="sm:hidden">
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
