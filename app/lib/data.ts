import { Plant } from './definitions';

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Aloe Vera (Sábila)',
    image: '/images/aloe-vera.jpg',
    luz: [
      'Prefiere un lugar con luz solar indirecta brillante.',
      'Puede tolerar algo de luz solar directa, especialmente en las horas de la mañana.',
      'Evita la exposición prolongada al sol directo durante las horas más intensas del día.',
    ],
    riego: [
      'Evita el riego excesivo, especialmente durante los meses de invierno.',
      'Riega cada dos semanas aproximadamente.',
      'Si encuentras que algunas hojas están muy delgadas y arrugadas, querrá decir que tienen sed y que necesitan un poco más de agua.',
    ],
    sustrato: [
      'Materia orgánica, con compost vegetal o fibra de coco.',
    ],
  },
  {
    id: 2,
    name: 'Cactus',
    image: '/images/cactus.jpg',
    luz: [
        'Necesita mucha luz solar directa, al menos 6 horas al día.',
        'Colócalo en una ventana orientada al sur o al oeste.',
    ],
    riego: [
        'Riega moderadamente durante la primavera y el verano, dejando que la tierra se seque completamente entre riegos.',
        'Reduce el riego en otoño e invierno.',
    ],
    sustrato: [
        'Utiliza un sustrato para cactus y suculentas, que drene bien.',
    ],
  },
  {
    id: 3,
    name: 'Helecho',
    image: '/images/helecho.jpg',
    luz: [
        'Prefiere la luz indirecta brillante.',
        'Evita la luz solar directa, ya que puede quemar las hojas.',
    ],
    riego: [
        'Mantén la tierra constantemente húmeda, pero no empapada.',
        'Le gusta la humedad ambiental alta.',
    ],
    sustrato: [
        'Utiliza un sustrato rico en materia orgánica y que retenga la humedad.',
    ],
  },
];