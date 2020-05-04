import React from "react"

import styles from './input.module.sass'

const Input = ({id, plcaeholder, name, inputType, type}) => {
  return (
    <label htmlFor={id} className={styles.label + ` ` + (type === 'half' ? styles.half : null)}>
      <span className={styles.border}></span>
      <span className={styles.borderHover}></span>
      <input type={inputType} placeholder={plcaeholder} name={name} id={id} className={styles.input} />
    </label>
  )
}

export default Input