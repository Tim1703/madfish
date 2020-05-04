import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ServicesScreen from "../components/Home/01-Services/services"
import IndustriesScreen from "../components/Home/02-IndustriesTechnologies/industries"
import CasesScreen from "../components/Home/04-Сases/cases"
import AwardsScreen from "../components/Home/06-Awards/awards"
import ContactsScreen from "../components/Home/07-Contacts/contacts"
import TestimonialsScreen from "../components/Home/05-Testimonials/testimonials"
import BlogScreen from "../components/Home/08-Blog/blog"
import MainScreen from "../components/Home/00-Main/main"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainScreen/>
    <ServicesScreen />
    <IndustriesScreen />
    <CasesScreen />
    <TestimonialsScreen/>
    <AwardsScreen/>
    <ContactsScreen/>
    <BlogScreen/>
  </Layout>
)

export default IndexPage
