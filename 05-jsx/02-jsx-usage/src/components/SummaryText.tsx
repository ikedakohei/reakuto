import React from 'react';

type Props = { children: React.ReactNode; };

const SummaryText: React.FunctionComponent<Props> = ({ children }) => {
  console.log(children);

  return <div className="story">{children}</div>;
};

export default SummaryText;
