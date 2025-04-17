import React from 'react';
import { FiUsers, FiFolder, FiMessageSquare, FiBarChart2 } from 'react-icons/fi';

const DashboardStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Benutzer',
      value: stats?.totalUsers || 0,
      icon: <FiUsers className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      label: 'Projekte',
      value: stats?.totalProjects || 0,
      icon: <FiFolder className="h-6 w-6" />,
      color: 'bg-green-500'
    },
    {
      label: 'Aktive Benutzer',
      value: stats?.activeUsers || 0,
      icon: <FiMessageSquare className="h-6 w-6" />,
      color: 'bg-purple-500'
    },
    {
      label: 'Veröffentlichte Projekte',
      value: stats?.publishedProjects || 0,
      icon: <FiBarChart2 className="h-6 w-6" />,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="bg-surface-dark rounded-lg shadow p-6 flex items-center"
        >
          <div className={`${item.color} p-3 rounded-lg mr-4`}>
            {item.icon}
          </div>
          <div>
            <p className="text-sm text-text-dark/60">{item.label}</p>
            <p className="text-2xl font-bold text-text-dark">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats; 