import React from 'react';

type TextProps = {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export const Text: React.FC<TextProps> = ({ 
  variant, 
  children, 
  style, 
  className 
}) => {

  const Component = ({
    'h1': 'h1',
    'h2': 'h2', 
    'h3': 'h3',
    'body': 'p',
    'caption': 'span'
  })[variant] as keyof JSX.IntrinsicElements;

  return (
    <Component 
      className={className} 
      style={style}
    >
      {children}
    </Component>
  );
};

