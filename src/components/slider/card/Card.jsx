import React from 'react'
import css from './Card.module.css'
const Card = ({img}) => {
  return (
    <div className={css.container}>
      <div className={css.div} style={{background:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize: "cover"}}></div>
    </div>
  )
}

export default Card