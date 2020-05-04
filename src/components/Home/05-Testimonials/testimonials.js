import React from "react"

import styles from "./testimonials.module.sass"
import Testimonial from "./Testimonial/Testimonial"

const TestimonialsScreen = () => {

  return (
    <section className={"section " + styles.testimonials}>
      <div className="container">
        <div className="row v-center space-between flex-wrap">
          <h2>Testimonials</h2>
          <div className={styles.navigation}>
            <div className={styles.numbers}>
              <span className={styles.current}>1</span> of <span>12</span>
            </div>
          </div>
          <div className={styles.wrapper}>
            <Testimonial/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsScreen
