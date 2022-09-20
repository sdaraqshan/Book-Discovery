import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
};

export default function Image(props: ImageProps) {
  return <img src={props.src} alt={props.alt} style={props.style} data-testid='image'/>;
}
