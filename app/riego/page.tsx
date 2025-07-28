const RiegoGrid = () => {
  // Datos estáticos para la grilla de riego como en el PDF
  const gridData = [
    [1, 1, 0, 1, 1, 0, 0],
    [1, 2, 2, 0, 1, 1, 0],
    [1, 0, 2, 2, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ];

  return (
    <div className="grid grid-cols-7 gap-1">
      {gridData.flat().map((cell, index) => (
        <div
          key={index}
          className={`w-full h-16 border border-gray-300 ${
            cell === 1 ? 'bg-blue-500' : cell === 2 ? 'bg-yellow-600' : 'bg-gray-100'
          }`}
        ></div>
      ))}
    </div>
  );
};

const Legend = () => {
  return (
    <div className="mt-6 flex items-center justify-center space-x-6">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-blue-500 mr-2 border border-gray-400"></div>
        <span>No necesita agua</span>
      </div>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-yellow-600 mr-2 border border-gray-400"></div>
        <span>Necesita agua</span>
      </div>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-gray-100 mr-2 border border-gray-400"></div>
        <span>Vacío</span>
      </div>
    </div>
  );
};

export default function RiegoPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Control de Riego
        </h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <RiegoGrid />
          <Legend />
        </div>
      </div>
    </div>
  );
}
