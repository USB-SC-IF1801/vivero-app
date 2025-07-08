import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Vivero App
        </Link>
        <div className="space-x-4">
          <Link href="/plantas" className="text-gray-300 hover:text-white">
            Plantas
          </Link>
          <Link href="/riego" className="text-gray-300 hover:text-white">
            Riego
          </Link>
        </div>
      </div>
    </nav>
  );
}
