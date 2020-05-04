import React from "react"
import PropTypes from "prop-types"
import styles from "./technology.module.sass"

const Technology = ({tech}) => (
  <div className={styles.technology}>
    <div className={styles.icon}>
      <div className={styles.shape}>{tech.shape}</div>
      <div className={styles.shapeHover}>
        {tech.shapeHover}
      </div>
      <div className={styles.iconInside}>{tech.icon}</div>
    </div>
    <div className={styles.title}>{tech.title}</div>
  </div>
)

Technology.propTypes = {
  tech: PropTypes.object,
}

// Technology.defaultProps = {
//   siteTitle: ``,
// }

export default Technology