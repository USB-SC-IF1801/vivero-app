import { plants } from '@/app/lib/data';

export default function PlantasPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Información de las Plantas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{plant.name}</h2>
            <div>
              <h3 className="font-semibold text-lg mb-2">Luz:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {plant.luz.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Riego:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {plant.riego.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Sustrato:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {plant.sustrato.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
