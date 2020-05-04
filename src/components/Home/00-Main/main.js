import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./main.module.sass"

import StyledCard from "../../StyledCardV2/StyledCardV2"

import ArrowRight from '../../../icons/arrow-right-small.svg'
import ArrowLeft from '../../../icons/arrow-left-small.svg'

import Logo0Image from '../../../images/first-screen/logo0.png';
import Logo1Image from '../../../images/first-screen/logo1.png';
import Logo2Image from '../../../images/first-screen/logo2.png';
import Logo3Image from '../../../images/first-screen/logo3.png';
import Img from "gatsby-image"

const MainScreen = () => {
  const data = useStaticQuery(graphql`
      query {
          image: file(relativePath: { eq: "case.jpg" }) {
              base
              childImageSharp {
                  fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return (
    <section className={"section " + styles.main}>
      <div className="container">
        <div className="row v-center space-between flex-wrap">
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.heading}>
                <h1>Mad ideas</h1>
                <p>implemented wisely</p>
              </div>
              <div className={styles.navigation}>
                <div className={styles.buttons}>
                  <div className={styles.button}>
                    <StyledCard type="reverse">
                      <button className="button button-small">
                        <ArrowLeft />
                      </button>
                    </StyledCard>
                  </div>
                  <StyledCard type="reverse">
                    <button className="button button-small">
                      <ArrowRight />
                    </button>
                  </StyledCard>
                </div>
                <h4>Cryptocurrency payment system</h4>
                <p>
                  An example of the cryptocurrency payment system gateway we
                  developed
                </p>
              </div>
            </div>

            <div className={styles.cases}>
              <div className={styles.mainCase}>
                <div className={styles.mainCaseContent}>
                  <Img
                    fluid={data.image.childImageSharp.fluid}
                    alt={data.image.base.split(".")[0]} // only use section of the file extension with the filename
                  />
                </div>
              </div>
              <div className={styles.thumbs}>
                <div className={styles.thumb}>
                  <StyledCard type="withOpacity">
                    <div className={styles.thumbContent}>
                      <img src={Logo0Image} alt=""/>
                    </div>
                  </StyledCard>
                </div>
                <div className={styles.thumb}>
                  <StyledCard type="active withOpacity">
                    <div className={styles.thumbContent}>
                      <img src={Logo1Image} alt=""/>
                    </div>
                  </StyledCard>
                </div>
                <div className={styles.thumb}>
                  <StyledCard type="withOpacity">
                    <div className={styles.thumbContent}>
                      <img src={Logo2Image} alt=""/>
                    </div>
                  </StyledCard>
                </div>
                <div className={styles.thumb}>
                  <StyledCard type="withOpacity">
                    <div className={styles.thumbContent}>
                      <img src={Logo3Image} alt=""/>
                    </div>
                  </StyledCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default MainScreen
