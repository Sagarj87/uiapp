import React, { useState } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`h-full bg-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-56'} shadow-sm`}
    >
      <button
        className="p-2 m-2 rounded hover:bg-gray-200 text-gray-500 focus:outline-none"
        onClick={() => setCollapsed((prev) => !prev)}
        aria-label="Toggle sidebar"
      >
        <span className="text-lg">{collapsed ? '→' : '←'}</span>
      </button>
      <nav className="flex-1 mt-4">
        <ul className="space-y-1">
          <li className="px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium cursor-pointer transition">Home</li>
          <li className="px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium cursor-pointer transition">Profile</li>
          <li className="px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium cursor-pointer transition">Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;