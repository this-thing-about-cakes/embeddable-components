import React from 'react';



import Container from '../../Container';

type Props = {
  title: string;
  body: string;
};

export default (props: Props) => {
  const { title, body } = props;

  return <Container className='cakewalk-title' title={title}>{body}</Container>;
};