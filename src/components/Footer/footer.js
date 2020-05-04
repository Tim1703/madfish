import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.sass"

import LocationIcon from "../../icons/location.svg"

import FacebookIcon from "../../icons/socials/facebook.svg"
import TwitterIcon from "../../icons/socials/twitter.svg"
import LinkedInIcon from "../../icons/socials/linkedin.svg"
import GithubIcon from "../../icons/socials/github.svg"
import RedditIcon from "../../icons/socials/reddit.svg"
import ClutchIcon from "../../icons/socials/clutch.svg"
import GoodFirmsIcon from "../../icons/socials/good-firms.svg"
import Tweet from "./Tweet/tweet"
import MadfishLogo from "../../icons/madfish-light.svg"

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className="row flex-wrap">
        <div className={styles.top}>
          <div className={styles.row}>
            <h4>Contact</h4>
            <div className={styles.location}>
              <div className={styles.locationIcon}>
                <LocationIcon />
              </div>
              <div className={styles.locationContent}>
                <a
                  href="https://www.google.com.ua/maps/place/%D1%83%D0%BB.+%D0%9F%D0%BE%D0%BB%D0%B5%D0%B2%D0%B0%D1%8F,+21,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4448114,30.4504627,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cc20a8eb5247:0x9d99b60a49ca1780!8m2!3d50.4448114!4d30.4526514?hl=ru"
                  target="_blank"
                >
                  Kyiv, Polova 21 Str.
                </a>
                <a href="tel:+380676112215">+38-067-611-22-15</a>
              </div>
            </div>
            <div className={styles.location}>
              <div className={styles.locationIcon}>
                <LocationIcon />
              </div>
              <div className={styles.locationContent}>
                <a
                  href="https://www.google.com.ua/maps/place/%C3%96piku+maja,+Valukoja+8,+11415+Tallinn,+%D0%AD%D1%81%D1%82%D0%BE%D0%BD%D0%B8%D1%8F/@59.4200831,24.8025974,17z/data=!3m1!4b1!4m5!3m4!1s0x4692eb570378622f:0x80dec7c12d2c0539!8m2!3d59.4200831!4d24.8047861?hl=ru"
                  target="_blank"
                >
                  Tallinn, Valukoja tn 8/1
                </a>
                <a href="tel:11415">11415</a>
              </div>
            </div>
            <div className={styles.social}>
              <div className={styles.socialTop}>
                <a
                  href="https://www.facebook.com/madfishofficial/"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a href="https://twitter.com/madfishofficial" target="_blank">
                  <TwitterIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/mad-fish-solutions"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/madfish-solutions" target="_blank">
                  <GithubIcon />
                </a>
                <a href="/" target="_blank">
                  <RedditIcon />
                </a>
              </div>
              <div className={styles.socialBottom}>
                <a
                  href="https://clutch.co/profile/madfishsolutions"
                  target="_blank"
                >
                  <ClutchIcon />
                </a>
                <a
                  href="https://www.goodfirms.co/company/madfish-solutions"
                  target="_blank"
                >
                  <GoodFirmsIcon />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <h4>Hire developers</h4>
            <ul>
              <li>
                <Link to="/">Developer #1</Link>
              </li>
              <li>
                <Link to="/">Developer #2</Link>
              </li>
              <li>
                <Link to="/">Developer #3</Link>
              </li>
              <li>
                <Link to="/">Developer #4</Link>
              </li>
              <li>
                <Link to="/">Developer #5</Link>
              </li>
              <li>
                <Link to="/">Developer #6</Link>
              </li>
            </ul>
          </div>
          <div className={styles.row}>
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/">Discovery</Link>
              </li>
              <li>
                <Link to="/">R&D and technology innovation</Link>
              </li>
              <li>
                <Link to="/">Blockchain solutions</Link>
              </li>
              <li>
                <Link to="/">Feedbacks</Link>
              </li>
              <li>
                <Link to="/">Hardware Engineering</Link>
              </li>
              <li>
                <Link to="/">Technology consulting</Link>
              </li>
              <li>
                <Link to="/">Developing</Link>
              </li>
              <li>
                <Link to="/">Design</Link>
              </li>
            </ul>
          </div>
          <div className={styles.row}>
            <h4>Last tweets</h4>
            <Tweet />
            <Tweet />
            <Tweet />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.logo}>
            <Link to="/">
              <MadfishLogo />
              <span>madfish.</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Cookies</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.copy}>
            © {new Date().getFullYear()} MadFish All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
