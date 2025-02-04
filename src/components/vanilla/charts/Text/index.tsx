import React from 'react';
import Title from '../../Title';
import Description from '../../Description';
import { fontStyle } from 'html2canvas/dist/types/css/property-descriptors/font-style';
import { fontWeight } from 'html2canvas/dist/types/css/property-descriptors/font-weight';

type Props = {
  title?: string;
  body?: string;
  titleFontSize?: number;
  bodyFontSize?: number;
};

export default (props: Props) => {
  const { title, body, titleFontSize, bodyFontSize  } = props;

  const titleStyle = {
    fontSize: titleFontSize ? `${titleFontSize}px` : undefined,
    lineHeight: titleFontSize ? '1.2em' : undefined
  }

  const bodyStyle = {
    fontSize: '1.5rem',
    lineHeight: bodyFontSize ? '1.2em' : undefined,
    fontStyle: 'normal',
    fontWeight: 500
  }

  return (
    <div className='cakewalk-title'>
      <Title title={title} style={titleStyle}/>
      <Description description={body} style={bodyStyle}/>
    </div>
  );
};