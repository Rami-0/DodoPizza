import React from 'react'
import css from './AnchorLink.module.css'

const AnchorLink = ({id}) => {
  return (
    <a href={`#${id}`} className={css.anchorLinks}>{id}</a>
  )
}

export default AnchorLink