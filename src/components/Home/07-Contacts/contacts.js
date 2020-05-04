import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./contacts.module.sass"
import Image from "../../image"
import Img from "gatsby-image"
import Form from "../../Form/Form"

const ContactsScreen = () => {
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
    <section className={"section " + styles.contacts}>
      <div className="container">
        <div className="row v-center space-between flex-wrap">
          <div className={styles.wrapper}>
            <div className={styles.call}>
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
              <h4>Matvey</h4>
              <p>CBDO</p>
              <button className="button button-secondary"><span className="border"></span><span className="content">Book a call</span></button>
            </div>
            <div className={styles.form}>
              <h2>Tell us about your project</h2>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsScreen
