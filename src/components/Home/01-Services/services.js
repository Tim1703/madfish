import React from "react"
import {Link} from "gatsby"
import styles from "./services.module.sass"

import StyledCard from "../../StyledCard/StyledCard"

import ArrowRight from "../../../icons/arrow-right.svg"

import DiscoveryIcon from "../../../icons/services/discovery.svg"
import RAndDIcon from "../../../icons/services/r-and-d-and-technology-innovation.svg"
import BlockchaineIcon from "../../../icons/services/blockchain-and-infrastructure-solutions.svg"
import SoftwareIcon from "../../../icons/services/software-engineering.svg"
import HardwareIcon from "../../../icons/services/hardware-engineering.svg"
import ConsultingIcon from "../../../icons/services/technology-consulting.svg"
import DevelopingIcon from "../../../icons/services/developing.svg"
import DesignIcon from "../../../icons/services/design.svg"

const services = [
  {
    icon: <RAndDIcon/>,
    title: `R&D and technology innovation`,
    content: `We have a 24/7 dedicated support team.`,
  },
  {
    icon: <BlockchaineIcon/>,
    title: `Blockchain and Infrastructure solutions`,
    content: `We have a 24/7 dedicated support team.`,
  },
  {
    icon: <SoftwareIcon/>,
    title: `Software engineering`,
    content: `We have a 24/7 dedicated support team.`,
  },
  {
    icon: <HardwareIcon/>,
    title: `Hardware Engineering`,
    content: `We have a 24/7 dedicated support team.`,
  },
  {
    icon: <ConsultingIcon/>,
    title: `Technology consulting`,
    content: `We have a 24/7 dedicated support team.`,
  },
  {
    icon: <DevelopingIcon/>,
    title: `Developing`,
    content: `We have a 24/7 dedicated support team.`,
  },
  {
    icon: <DesignIcon/>,
    title: `Design`,
    content: `We have a 24/7 dedicated support team.`,
  },
]

const ServicesScreen = () => (
  <section className={"section " + styles.services}>
    <div className="container">
      <div className="row v-center space-between flex-wrap">
        <div className={styles.heading}>
          <h2>Services</h2>
          <p>
            An example of the cryptocurrency payment system gateway we developed
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.service + ` ` + styles.serviceDiscovery}>
            <Link to="/" className={styles.link}></Link>
            <div className={styles.content}>
              <DiscoveryIcon/>
              <div className={styles.info}>
                <h3>Discovery</h3>
                <p>We have a 24/7 dedicated support team. We have a modern website with great and efficient design. Our service is feature-packed and all is included.</p>
                <button className="button button-arrow white">
                  view more <ArrowRight />
                </button>
              </div>
            </div>
          </div>
          {services.map((el, index) => (
            <div className={styles.service} key={el.title}>
              <StyledCard>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    {/*<BlockchaineIcon/>*/}
                    {console.log(el.icon)}
                    {el.icon}
                  </div>
                  <div className={styles.info}>
                    <h3>{el.title}</h3>
                    <p>{el.content}</p>
                    <button className="button button-arrow">
                      view more <ArrowRight />
                    </button>
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

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default ServicesScreen
