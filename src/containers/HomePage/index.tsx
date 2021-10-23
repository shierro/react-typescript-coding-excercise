import React from 'react';

import exerciseList from '../../constants/exerciseList';
import Status from './components/Status';

const Container: React.FC = ({ children }) => (
  <div className="bg-gray-100 dark:bg-gray-500">
    {children}
  </div>
);

const Title: React.FC = ({ children }) => (
  <h1 className="text-2xl font-serif dark:text-white py-2 sm:text-3xl">
    {children}
  </h1>
);

const Table: React.FC = ({ children }) => (
  <table
    className="
      w-full
      max-w-2xl
      table-auto
      border-separate
      border
      border-gray-700
      dark:bg-gray-600"
  >
    {children}
  </table>
);

const BodyTR: React.FC = ({ children }) => (
  <tr
    className="
      bg-gray-50
      hover:opacity-80
      odd:bg-blue-200
      dark:bg-gray-400
      dark:even:bg-gray-300"
  >
    {children}
  </tr>
);

const TH: React.FC = ({ children }) => (
  <th className="text-md py-2 sm:text-xl sm:py-4">{children}</th>
);

const Thead: React.FC = ({ children }) => (
  <thead className="dark:bg-gray-500">{children}</thead>
);

const HeadTR: React.FC = ({ children }) => (
  <tr className="border border-gray-400">{children}</tr>
);

function HomePage() {
  return (
    <Container>
      <Title>Exercise List</Title>
      <div className="flex flex-row w-full items-center justify-center">
        <Table>
          <Thead>
            <HeadTR>
              <TH>Title</TH>
              <TH>Status</TH>
              <TH>Started At</TH>
              <TH>Finished At</TH>
            </HeadTR>
          </Thead>
          <tbody>
            {exerciseList.map((exercise) => (
              <BodyTR>
                <td className="py-2 sm:px-8 sm:py-3">{exercise.title}</td>
                <td className="">
                  <Status value={exercise.status} />
                </td>
                <td className="px-1">{exercise.startedAt ? exercise.startedAt.toDateString() : 'n/a'}</td>
                <td className="px-1">{exercise.finishedAt ? exercise.finishedAt.toDateString() : 'n/a'}</td>
              </BodyTR>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default HomePage;
