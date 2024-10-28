"use client"
import { useRef, useState } from "react";
import  {config} from "dotenv"
import emailjs from "@emailjs/browser";
import styles from "./styles/contact.module.css";


const Contact = () => {
  const [messageStatus, setMessageStatus] = useState("")
  config()
  const formdetails = useRef()

  function submitForm(e){
    console.log(process.env.EMAILJS_KEY)
    console.log(process.env.TEMPLATE_ID)
    console.log(process.env.SERVICE_ID)
    console.log(formdetails.current.name.value)
    console.log(formdetails.current.email.value)
    console.log(formdetails.current.message.value)
    e.preventDefault();
    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formdetails.current, process.env.EMAILJS_KEY)
      .then((result) => {
        setMessageStatus(result.text);
        formdetails.current = {}
      }, (error) => {
        setMessageStatus(error.text);
      });
  }
  return (

    <section className={styles.contactform}>  
    {messageStatus && <p className={styles.status}>Message sent</p>}
    <h2 className={styles.contactformhead}>Contact Me</h2>
      <form onSubmit={submitForm} ref={formdetails}>
     
        <label>Name</label>
        <input type="text" name="name"required className={styles.inp}/>
        <label>Email</label>
        <input type="email" name="email" required className={styles.inp}/>
        <label>Message</label>
        <textarea name="message" className={styles.txarea} minLength={10}></textarea>
        <input type="submit" value="Send" className={styles.submitbtn}/>
      </form>
    </section>
  )
}

export default Contact


// export async function getStaticProps(){

// }