import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido al Sistema del Vivero</h1>
        <p className="text-lg text-gray-600 mb-8">
          Gestiona la información de las plantas y controla el riego de forma eficiente.
        </p>
        <div className="space-x-4">
          <Link href="/plantas" className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700">
            Ver Plantas
          </Link>
          <Link href="/riego" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Control de Riego
          </Link>
        </div>
      </div>
    </main>
  );
}