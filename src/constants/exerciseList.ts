import { Exercise } from '../types';

const exerciseList: Exercise[] = [
  {
    title: 'Support Dark Mode',
    status: 'DONE',
    startedAt: new Date(2021, 9, 22),
    finishedAt: new Date(2021, 9, 22),
  },
  {
    title: 'Convert CRA to Typescript',
    status: 'DONE',
    startedAt: new Date(2021, 9, 21),
    finishedAt: new Date(2021, 9, 21),
  },
  {
    title: 'Add EsLINT to the mix',
    status: 'DONE',
    startedAt: new Date(2021, 9, 21),
    finishedAt: new Date(2021, 9, 21),
  },
  {
    title: 'Add Tailwind.css Support',
    status: 'DONE',
    startedAt: new Date(2021, 9, 6),
    finishedAt: new Date(2021, 9, 6),
  },
  {
    title: 'Todo App',
    status: 'BACKLOG',
  },
  {
    title: 'Table Sort',
    status: 'IN_PROGRESS',
    startedAt: new Date(2021, 9, 22),
  },
];

export default exerciseList;
