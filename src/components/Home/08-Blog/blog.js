import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./blog.module.sass"
import Image from "../../image"
import Img from "gatsby-image"
import Form from "../../Form/Form"
import StyledCard from "../../StyledCard/StyledCard"

const posts = [
  {
    image: ``,
    title: `Teacherly Provides Collaboration Platform to 70,000 Teachers`,
  },
  {
    image: ``,
    title: `Teacherly Provides Collaboration Platform to 70,000 Teachers`,
  },
  {
    image: ``,
    title: `Teacherly Provides Collaboration Platform to 70,000 Teachers`,
  },
]

const BlogScreen = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "case.jpg" }) {
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
    <section className={"section " + styles.blog}>
      <div className="container">
        <div className="row v-center space-between flex-wrap">
          <h2>Blog</h2>
          <div className={styles.wrapper}>
            {posts.map(post => (
              <div className={styles.post} key={post.title}>
                <StyledCard type="reverse">
                  <div className={styles.content}>
                    <div className={styles.image}>
                      <Img
                        fluid={data.image.childImageSharp.fluid}
                        alt={data.image.base.split(".")[0]} // only use section of the file extension with the filename
                      />
                    </div>
                    <div className={styles.title}>
                      <h3>{post.title}</h3>
                    </div>
                  </div>
                </StyledCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogScreen
