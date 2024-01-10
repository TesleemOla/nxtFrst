import emailjs from "@emailjs/browser";
import styles from "./styles/contact.module.css";


const Contact = () => {
 function submitForm (event){
  event.preventDefault()
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form', this)
      .then(function () {
        console.log('SUCCESS!');
      }, function (error) {
        console.log('FAILED...', error);
      });
 }
  return (

    <main className={styles.contactform}>  
      <form onSubmit={submitForm}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </main>
  )
}

export default Contact