import React from "react"

import styles from "./tweet.module.sass"

import Image from "../../image"

import TwitterIcon from '../../../icons/socials/twitter.svg'

const Tweet = () => (
  <div className={styles.tweet}>
    <a href="https://www.twitter.com" target="_blank" className={styles.link}></a>
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.image}>
          <Image/>
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            Bill Gates <TwitterIcon/>
          </div>
          <div>
            @BillGates
          </div>
        </div>
      </div>
      <div className={styles.content}>I always enjoy chatting with @Trevorno some mo...</div>
    </div>
  </div>
)

export default Tweet
