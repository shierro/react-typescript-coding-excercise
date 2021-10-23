import React from 'react';

import { EXERCISE_STATUS } from '../../../../types';

type StatusProps = {
  value: EXERCISE_STATUS;
}

const Status: React.FC<StatusProps> = ({ value }) => {
  let bgColor;
  let darkBgColor;
  switch (value) {
    case 'DONE':
      bgColor = 'bg-green-200';
      darkBgColor = 'bg-green-400';
      break;
    case 'IN_PROGRESS':
      bgColor = 'bg-yellow-200';
      darkBgColor = 'bg-yellow-500';
      break;
    case 'BACKLOG':
    default:
      bgColor = 'bg-gray-300';
      darkBgColor = 'bg-gray-700';
  }
  return (
    <span
      className={`
        p-1
        rounded-md
        text-xs
        lowercase
        ${bgColor}
        dark:${darkBgColor}
        dark:text-white`}
    >
      {value}
    </span>
  );
};

export default React.memo(Status);
