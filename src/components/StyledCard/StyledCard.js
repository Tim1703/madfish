import React from "react"
import { Link } from "gatsby"

import styles from "./styled-card.module.sass"

const StyledCard = ({ children, isOpenSource = false, type }) => (
  <div className={[styles.card, (type === 'hideDefault' ?  styles.hideDefault : null), (type === 'reverse' ? styles.reverse : null)].join(` `)}>
    <div className={styles.border}></div>
    <Link to="/index-2" className={styles.link}></Link>
    <div className={styles.content}>
      {isOpenSource ? (
        <div className={styles.openWrapper}>
          <div className={styles.open}>
            <div className={styles.openBorder}></div>
            <div className={styles.openContent}>
              Open Source
            </div>
          </div>
        </div>
      ) : null }
      {children}
    </div>
  </div>
)

export default StyledCard
