import React from 'react';

const BaseDashboard = ({ children }) => {

  return (
    <div className="min-h-screen bg-background-dark pt-16">
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-background-light rounded-lg shadow-lg p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BaseDashboard; 