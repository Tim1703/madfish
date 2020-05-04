import React from "react"
import { Link } from "gatsby"
import styles from "./industries.module.sass"

import Technology from "./Technology/Technology"

// shapes
import BlockShape from "../../../icons/technologies/shapes/block.svg"
import BlockShapeHover from "../../../icons/technologies/shapes/block-hover.svg"
import CircleShape from "../../../icons/technologies/shapes/circle.svg"
import CircleShapeHover from "../../../icons/technologies/shapes/circle-hover.svg"
import ShieldShape from "../../../icons/technologies/shapes/shield.svg"
import ShieldShapeHover from "../../../icons/technologies/shapes/shield-hover.svg"
import SquareShape from "../../../icons/technologies/shapes/square.svg"
import SquareShapeHover from "../../../icons/technologies/shapes/square-hover.svg"

// icons
import AngularIcon from "../../../icons/technologies/icons/angular.svg"
import JsIcon from "../../../icons/technologies/icons/js.svg"
import PythonIcon from "../../../icons/technologies/icons/python.svg"
import GoIcon from "../../../icons/technologies/icons/go.svg"
import PostgresqlIcon from "../../../icons/technologies/icons/postgresql.svg"
import MysqlIcon from "../../../icons/technologies/icons/mysql.svg"
import MongodbIcon from "../../../icons/technologies/icons/mongodb.svg"
import ReactIcon from "../../../icons/technologies/icons/reactI.svg"
import VueIcon from "../../../icons/technologies/icons/vue-js.svg"
import LessIcon from "../../../icons/technologies/icons/less.svg"
import SassIcon from "../../../icons/technologies/icons/sass.svg"
import CssIcon from "../../../icons/technologies/icons/css.svg"
import EthereumIcon from "../../../icons/technologies/icons/ethereum.svg"
import TronIcon from "../../../icons/technologies/icons/tron.svg"
import TezosIcon from "../../../icons/technologies/icons/tezos.svg"
import EosIcon from "../../../icons/technologies/icons/eos.svg"
import StyledCard from "../../StyledCard/StyledCard"
import Industry from "./Industry/Industry"

const industries = [
  `CRM-ERP systems`,
  `Fintech Software Development`,
  `Process Consulting`,
  `Blockchain Solution`,
  `Cryptocurrency Infrastructure solutions`,
]

const technologiesArray = [
  {
    key: 1,
    elements: [
    {
      icon: <AngularIcon />,
      shape: <ShieldShape />,
      shapeHover: <ShieldShapeHover />,
      title: `Angular`,
    },
      {
        icon: <JsIcon />,
        shape: <BlockShape />,
        shapeHover: <BlockShapeHover />,
        title: `JavaScript`,
      },
      {
        icon: <PythonIcon />,
        shape: <CircleShape />,
        shapeHover: <CircleShapeHover />,
        title: `Python`,
      },
      {
        icon: <GoIcon />,
        shape: <CircleShape />,
        shapeHover: <CircleShapeHover />,
        title: `Golang`,
      },
    ],
  },
  {
    key: 2,
    elements: [
      {
        icon: <PostgresqlIcon />,
        shape: <BlockShape />,
        shapeHover: <BlockShapeHover />,
        title: `PostgreSQL`,
      },
      {
        icon: <MysqlIcon />,
        shape: <CircleShape />,
        shapeHover: <CircleShapeHover />,
        title: `MySQL`,
      },
      {
        icon: <MongodbIcon />,
        shape: <BlockShape />,
        shapeHover: <BlockShapeHover />,
        title: `MongoDB`,
      },
      {
        icon: <ReactIcon />,
        shape: <ShieldShape />,
        shapeHover: <ShieldShapeHover />,
        title: `React`,
      },
    ],
  },
  {
    key: 3,
    elements: [
      {
        icon: <VueIcon />,
        shape: <SquareShape/>,
        shapeHover: <SquareShapeHover/>,
        title: `VueJS`,
      },
      {
        icon: <LessIcon />,
        shape: <ShieldShape />,
        shapeHover: <ShieldShapeHover />,
        title: `Less`,
      },
      {
        icon: <SassIcon />,
        shape: <SquareShape/>,
        shapeHover: <SquareShapeHover/>,
        title: `Sass`,
      },
      {
        icon: <CssIcon />,
        shape: <BlockShape />,
        shapeHover: <BlockShapeHover />,
        title: `CSS`,
      },
    ],
  },
  {
    key: 4,
    elements: [
      {
        icon: <EthereumIcon />,
        shape: <CircleShape />,
        shapeHover: <CircleShapeHover />,
        title: `Ethereum`,
      },
      {
        icon: <TronIcon />,
        shape: <CircleShape />,
        shapeHover: <CircleShapeHover />,
        title: `Tron`,
      },
      {
        icon: <TezosIcon />,
        shape: <ShieldShape />,
        shapeHover: <ShieldShapeHover />,
        title: `Tezos`,
      },
      {
        icon: <EosIcon />,
        shape: <BlockShape />,
        shapeHover: <BlockShapeHover />,
        title: `EOS`,
      },
    ]
  }
]


const IndustriesScreen = () => {

  const renderTableHeader = () => {
    return technologiesArray.map(el => {
      return (
        <div className={styles.row} key={el.key}>
          {el.elements.map(innerEl => (
            <Technology tech={innerEl} key={innerEl.title}/>
          ))}
        </div>
      )
    });
  }

  // let intoTechnologies;
  //
  // technologiesArray.map((el, index) => {
  //   if(index ==== 0){
  //     intoTechnologies = <div className={styles.row}>
  //   } else if () {
  //
  //     }
  //   <Technology tech={el} />
  // };

  return (
    <section className={"section " + styles.industries}>
      <div className="container">
        <div className="row v-center space-between flex-wrap">
          <h2>Industries & Technologies</h2>
          <div className={styles.wrapper}>
            <div className={styles.industries}>
              <p className={styles.heading}>MadFish experienced In:</p>
              <div className={styles.list}>
                {industries.map(el => (
                  <Industry industry={el} key={el}/>
                ))}
              </div>
            </div>
            <div className={styles.technologies}>
              {renderTableHeader()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesScreen
