import React from 'react'

export const Card = ({ title, content, price, link }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>
        {content}
      </p>
      <p>Valor R$ {price}!</p>
      <a href={link}>
        Pagar!
      </a>
    </article>
  )
}


