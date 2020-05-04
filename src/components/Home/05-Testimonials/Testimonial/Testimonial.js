import React from "react"
// import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./testimonial.module.sass"

import LinkedInIcon from "../../../../icons/testimonials/linkedin.svg"
import GoodFirmsIcon from "../../../../icons/testimonials/goodfirms.svg"

import CaseIcon from "../../../../icons/cases/quick-swap.svg"

import ArrowRight from "../../../../icons/arrow-right.svg"
import Img from "gatsby-image"

// import StyledCard from "../../../StyledCard/StyledCard"

const Award = ({ children, year }) => {
  const data = useStaticQuery(graphql`
      query {
          image: file(relativePath: { eq: "Matvey_Sivoraksha.jpg" }) {
              base
              childImageSharp {
                  fluid(maxWidth: 180) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return (
    <div className={styles.testimonial}>
      <div className={styles.contentWrapper}>
        <div className={styles.photoOuter}></div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageInner}>
            <div className={styles.image}>
              <Img
                fluid={data.image.childImageSharp.fluid}
                alt={data.image.base.split(".")[0]} // only use section of the file extension with the filename
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.photoInner}></div>
          <div className={styles.left}>
            <div className={styles.info}>
              <a href="https://www.google.com" className={styles.person}>
                <h4>
                  Oleh Khalin <span>rated 5/5</span>
                </h4>
                <span className={styles.linkedin}>
                <LinkedInIcon />
                LinkedIn
              </span>
              </a>
              <a href="https://www.google.com" className={styles.goodfirms}>
              <span className={styles.stars}>
                <span className={styles.star + ` ` + styles.active}>★</span>
                <span className={styles.star + ` ` + styles.active}>★</span>
                <span className={styles.star + ` ` + styles.active}>★</span>
                <span className={styles.star + ` ` + styles.active}>★</span>
                <span className={styles.star}>★</span>
              </span>
                <span>
                <GoodFirmsIcon />
              </span>
              </a>
            </div>
            <div className={styles.comment}>
              "I am so very pleased with the work writer 1749 produced! I received
              an essay that was far beyond my expectations. The instructions and
              suggestions I submitted were followed very nicely. I received an essay
              that was far beyond my expectations. The instructions and suggestions
              I submitted“
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.caseWrapper}>
              <Link to="index-2" className={styles.link}></Link>
              <div className={styles.icon}>
                <CaseIcon />
              </div>
              <div className={styles.case}>
                <h3>QuipuSwap</h3>
                <p>Oleh’s case - a modern website with great</p>
                <button className="button button-arrow">
                  view more <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Industry.propTypes = {
//   industry: PropTypes.string,
// }
//
// Industry.defaultProps = {
//   industry: ``,
// }

export default Award
