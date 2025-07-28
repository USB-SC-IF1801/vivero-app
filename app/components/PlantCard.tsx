import Image from 'next/image';
import { Plant } from '@/app/lib/definitions';

const Section = ({ title, items, emoji, colorClass }: { title: string; items: string[]; emoji: string; colorClass: string }) => (
  <div>
    <h3 className={`flex items-center font-bold text-md mb-2 ${colorClass}`}>
      <span className="mr-2 text-lg">{emoji}</span>
      {title}
    </h3>
    <ul className="space-y-1 pl-4">
      {items.map((item, index) => (
        <li key={index} className="text-sm text-gray-600 list-disc">{item}</li>
      ))}
    </ul>
  </div>
);

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col h-full">
      <div className="relative">
        <Image
          src={plant.image}
          alt={`Imagen de ${plant.name}`}
          width={400}
          height={224}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{plant.name}</h2>
        <div className="space-y-4 flex-grow">
          <Section title="Luz" items={plant.luz} emoji="☀️" colorClass="text-yellow-600" />
          <Section title="Riego" items={plant.riego} emoji="💧" colorClass="text-blue-600" />
          <Section title="Sustrato" items={plant.sustrato} emoji="🌱" colorClass="text-green-700" />
        </div>
      </div>
    </article>
  );
}