import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-green-50">
      <div className="text-center p-8 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-green-800 mb-4">Sistema de Control del Vivero</h1>
        <p className="text-lg text-gray-700 mb-6">
          Bienvenido al sistema automatizado para controlar el riego y las condiciones de las plantas en el vivero.
          Esta herramienta te ayudará a mantener tus plantas sanas y en óptimas condiciones.
        </p>
        <p className="text-md text-gray-600 mb-8">
          Navega a la sección de <strong>Plantas</strong> para obtener información detallada sobre cada especie o visita <strong>Riego</strong> para ver el estado de riego actual.
        </p>
        <div className="flex flex-wrap justify-center space-x-4">
          <Link href="/plantas" className="px-8 py-3 text-white font-semibold bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-colors">
            Ver Plantas
          </Link>
          <Link href="/riego" className="px-8 py-3 text-white font-semibold bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Control de Riego
          </Link>
        </div>
      </div>
    </main>
  );
}