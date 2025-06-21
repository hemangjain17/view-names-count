
import React from 'react';

const Index = () => {
  const names = [
    "Alexandra Chen",
    "Marcus Thompson", 
    "Isabella Rodriguez",
    "David Kim",
    "Sofia Andersson",
    "James Wilson",
    "Emma Johnson",
    "Lucas Martinez",
    "Olivia Davis",
    "Benjamin Clark",
    "Ava Miller",
    "Noah Brown",
    "Mia Garcia",
    "Ethan Taylor",
    "Charlotte Anderson",
    "Mason Lee",
    "Amelia White",
    "Logan Harris",
    "Harper Lewis",
    "Alexander Walker"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="flex justify-between items-center p-8">
        <h1 className="text-4xl font-bold text-white tracking-wider">VIEWR</h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <span className="text-white font-semibold text-lg">
            {names.length} {names.length === 1 ? 'Name' : 'Names'}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {names.map((name, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {name.split(' ').map(part => part[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg leading-tight">
                      {name}
                    </h3>
                    <p className="text-blue-200 text-sm opacity-75">
                      Member #{index + 1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-indigo-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-slate-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Index;
