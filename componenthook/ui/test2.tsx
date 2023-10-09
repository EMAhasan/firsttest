import React from 'react';

const SidebarNavigation = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform -translate-x-full sm:translate-x-0 ease-in duration-300">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Sidebar</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-700 transition duration-200"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNavigation;
