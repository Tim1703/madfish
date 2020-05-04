import React from "react"

import styles from './form.module.sass'
import Input from "./Input/Input"

const Form = () => {
  return (
    <form action="" className={styles.form}>
      <Input type="half" id="home_contact_name" inputType="text" name="name" plcaeholder="Full name" />
      <Input type="half" id="home_contact_subject" inputType="text" name="subject" plcaeholder="Subject" />
      <Input id="home_contact_contact" inputType="text" name="contact" plcaeholder="Contact" />
      <Input id="home_contact_comment" inputType="text" name="comment" plcaeholder="Tell us about your project" />
      <button className="button button-primary">Send message</button>
    </form>
  )
}

export default Form