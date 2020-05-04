import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import styles from "./awards.module.sass"

import Img from "gatsby-image"
import Award from "./Award/Award"

// const awards = [
//   {
//     year: 2019,
//     icon: ,
//   },
// ]


const AwardsScreen = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "awards" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // const data = useStaticQuery(graphql`
  //     query {
  //         placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //             childImageSharp {
  //                 fluid(maxWidth: 300) {
  //                     ...GatsbyImageSharpFluid
  //                 }
  //             }
  //         }
  //     }
  // `)

  return (
    <section className={"section " + styles.cases}>
      <div className="container">
        <div className="row v-center space-between flex-wrap">
          <h2>Awards</h2>
          <div className={styles.wrapper}>
            {data.allFile.edges.map(image => (
              <Award year={image.node.base.split("-")[0]} key={image.node.base.split(".")[0]}>
                <Img
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                />
              </Award>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsScreen
