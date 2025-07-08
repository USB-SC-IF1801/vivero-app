import { Plant } from './definitions';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Aloe Vera (Sábila)',
    luz: [
      'Prefiere un lugar con luz solar indirecta brillante',
      'Puede tolerar algo de luz solar directa, especialmente en las horas de la mañana',
      'Evita la exposición prolongada al sol directo durante las horas más intensas del día',
    ],
    riego: [
      'Evita el riego excesivo, especialmente durante los meses de invierno',
      'Riega cada dos semanas aproximadamente',
      'Si encuentras que algunas hojas están muy delgadas y arrugada, querrá decir que tienen sed y que necesitan un poco más de agua',
    ],
    sustrato: ['Materia orgánica, con compost vegetal o fibra de coco'],
  },
];
