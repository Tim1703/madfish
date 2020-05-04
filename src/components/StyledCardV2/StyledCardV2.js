import React from "react"
import { Link } from "gatsby"

import styles from "./styled-cardv2.module.sass"

const StyledCardV2 = ({ children, type, link }) => (
  <div className={[styles.card, ((type && type.includes('active')) ? styles.active : null), ((type && type.includes('withOpacity')) ? styles.withOpacity : null), ((type && type.includes('reverse')) ? styles.reverse : null)].join(' ')}>
    <div className={styles.border}></div>
    <div className={styles.border2}></div>
    {link ? <Link to="/index-2" className={styles.link}></Link> : null }
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default StyledCardV2
