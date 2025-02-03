import React from 'react';
import Title from '../../Title';
import Description from '../../Description';

type Props = {
  title?: string;
  body?: string;
  titleFontSize?: number;
  bodyFontSize?: number;
};

export default (props: Props) => {
  const { title, body, titleFontSize, bodyFontSize  } = props;

  return (
    <div className='cakewalk-title'>
      <Title title={title} />
      <Description description={body}/>
    </div>
  );
};