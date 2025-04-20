import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

const DashboardLayout = ({ children }) => (
  <div className="flex flex-col h-screen bg-gray-50">
    <Header />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  </div>
);

export default DashboardLayout;