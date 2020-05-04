import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "./award.module.sass"

import AwardsYear from '../../../../icons/awards/award-year.svg'

import StyledCard from "../../../StyledCard/StyledCard"

const Award = ({children, year}) => (
  <div className={styles.awardWrapper}>
    <div className={styles.award}>
      <div className={styles.year}>
        <AwardsYear/>
        <span>{year}</span>
      </div>
      <div className={styles.border}></div>
      <Link to="index-2" className={styles.link}></Link>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
)

// Industry.propTypes = {
//   industry: PropTypes.string,
// }
//
// Industry.defaultProps = {
//   industry: ``,
// }

export default Award