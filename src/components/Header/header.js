import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"

import styles from "./header.module.sass"

import MadfishLogo from '../../icons/madfish.svg'

const Header = () => {
  const [headerClass, setHeaderClass] = useState(``);

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll)
  }, [])

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200;
    if (distanceY > shrinkOn) {
      setHeaderClass(styles.smaller)
    } else {
      // headerEl.classList.add("smaller");
      setHeaderClass(``)
      // headerEl.classList.remove("smaller");
    }
  }

  return (
    <header className={styles.header + ` ` + headerClass}>
      <div className="container">
        <div className="row v-center space-between">
          <div className={styles.logo}>
            <Link to="/">
              <MadfishLogo />
              <span>madfish.</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Cases</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
            <button className="button button-primary">
              Book a call
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
