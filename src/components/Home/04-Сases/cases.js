import React from "react"
import {Link} from "gatsby"
import styles from "./cases.module.sass"

import StyledCard from "../../StyledCard/StyledCard"

import Compiler from "../../../icons/cases/compiler.svg"
import QuickSwap from "../../../icons/cases/quick-swap.svg"
import StrelaTrans from "../../../icons/cases/strela-trans.svg"
import ThanosWallet from "../../../icons/cases/thanos-wallet.svg"

const cases = [
  {
    icon: <QuickSwap/>,
    title: `QuipuSwap`,
    content: `We have a modern website with great and efficient design and fantastic.`,
    isOpenSource: false
  },
  {
    icon: <ThanosWallet/>,
    title: `Thanos wallet`,
    content: `Our service is feature-packed and all is included in the advertised.`,
    isOpenSource: false
  },
  {
    icon: <Compiler/>,
    title: `Compiler`,
    content: `We have a clear and simple refund policy that just works.`,
    isOpenSource: true
  },
  {
    icon: <StrelaTrans/>,
    title: `Strela - Trans`,
    content: `Our service is feature-packed and all is included in the advertised.`,
    isOpenSource: false
  },
  {
    icon: <Compiler/>,
    title: `Compiler 2`,
    content: `We have a clear and simple refund policy that just works.`,
    isOpenSource: true
  },
  {
    icon: <StrelaTrans/>,
    title: `Strela - Trans 2`,
    content: `Our service is feature-packed and all is included in the advertised.`,
    isOpenSource: true
  },
  {
    icon: <QuickSwap/>,
    title: `QuipuSwap 2`,
    content: `We have a modern website with great and efficient design and fantastic.`,
    isOpenSource: false
  },
  {
    icon: <ThanosWallet/>,
    title: `Thanos wallet 2`,
    content: `Our service is feature-packed and all is included in the advertised.`,
    isOpenSource: false
  },
]

const CasesScreen = () => (
  <section className={"section " + styles.cases}>
    <div className="container">
      <div className="row v-center space-between flex-wrap">
        <div className={styles.heading}>
          <h2>Cases</h2>
          <div className={styles.buttons}>
            <Link to="/" className={"button button-primary " + styles.buttonPrimary}>More cases</Link>
            <Link to="/" className="button button-secondary"><span className="border"></span><span className="content">More Open Source</span></Link>
          </div>
        </div>
        <div className={styles.wrapper}>
          {cases.map(el => (
            <div className={styles.case} key={el.title}>
              <StyledCard isOpenSource={el.isOpenSource}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    {el.icon}
                  </div>
                  <div className={styles.info}>
                    <h3>{el.title}</h3>
                    <p>{el.content}</p>
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

export default CasesScreen
