import React from 'react'

type TextProps = {
  varient?: 'h1' | 'h2' | 'p' | 'span',
  children: React.ReactNode,
  style?: React.CSSProperties
}

export const Text: React.FC<TextProps> = ({ varient, children, style }) => {
  if (varient === 'h1') return <h1 style={style}>{children}</h1>
  if (varient === 'h2') return <h2 style={style}>{children}</h2>
  if (varient === 'p') return <p style={style}>{children}</p>
  if (varient === 'span') return <span style={style}>{children}</span>

  return <div style={style}>{children}</div>
}
