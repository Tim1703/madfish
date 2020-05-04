import React from "react"
import PropTypes from "prop-types"
import styles from "./industry.module.sass"

import ArrowRight from '../../../../icons/technologies/arrow-right-small.svg'

import StyledCard from "../../../StyledCard/StyledCard"

const Industry = ({industry}) => (
  <div className={styles.industry}>
    <StyledCard type="hideDefault">
      <div className={styles.content}>
        <h3>{industry}</h3><ArrowRight/>
      </div>
    </StyledCard>
  </div>
)

Industry.propTypes = {
  industry: PropTypes.string,
}

Industry.defaultProps = {
  industry: ``,
}

export default Industry