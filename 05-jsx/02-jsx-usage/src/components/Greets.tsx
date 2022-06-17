import React from 'react';

type Props = { name: string; times?: number; children: React.ReactNode; };

const Greets: React.FunctionComponent<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {[...Array(times)].map((_, index) => (
        <p key={index}>Hello, {name}! {children}</p>
      ))}
    </>
  );
};

export default Greets;
