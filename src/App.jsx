import React from 'react';
import './index.css';
import DashboardLayout from './components/DashboardLayout.jsx';
import { Button, Table, notification } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
];
const data = [
  { key: 1, name: 'John', age: 32 },
  { key: 2, name: 'Jane', age: 28 },
];

function App() {
  return (
    <DashboardLayout>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 tracking-tight">Welcome to your dashboard!</h2>
      <Button
        type="primary"
        className="!bg-blue-600 !border-blue-600 hover:!bg-blue-700 my-4 px-6 py-2 text-base font-semibold rounded shadow-sm transition focus:ring-2 focus:ring-blue-300"
        onClick={() => notification.success({ message: 'Success!', description: 'This is an AntD notification.' })}
      >
        AntD Primary Button (Tailwind Styled)
      </Button>
      <div className="my-8 rounded-xl shadow bg-white overflow-hidden border border-gray-100">
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={false} 
          className="bg-white text-gray-800" 
        />
      </div>
    </DashboardLayout>
  );
}

export default App;