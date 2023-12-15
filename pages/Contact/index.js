import { useFormik } from "formik";
import * as yup from "yup"
import { GithubOutlined, CodepenOutlined, LinkedinOutlined  } from "@ant-design/icons";
import styles from "./styles/contact.module.css"


const Contact = () => {
  const validationSchema= yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    message: yup
      .string('Enter your Message')
      .min(20, 'Message should be at least a sentence')
      .required('message is required'),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      e.preventDefault()
    console.log(values)
      // this.action = `?email=${values.email}&message=${values.message}`,
      // this.method ="POST"
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (

        <main className="pg-bg">  
          <section className={styles.contactsect}>
        <h1>Contact</h1>
      <form onSubmit={formik.onSubmit}>
             
                <input type="email" name="email" value={formik.values.email}  
              className={formik.touched.email && formik.errors.email ? `${styles.cninp} ${styles.cnerr}`: `${styles.cninp}`}
                onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={formik.touched.email && formik.errors.email || "Enter your email"} />
             
            <textarea type="text" name="message" value={formik.values.message} 
            className={formik.touched.message && formik.errors.message ? `${styles.cntxtar} ${styles.cnerr}`:styles.cntxtar}
                  onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder={formik.touched.message && formik.errors.message || "Enter your message"} >
            </textarea>
       
              
              <button type="submit" className={styles.btncnt}>
                Submit
              </button>
              {/* <Button/> */}
              </form>
          <div>
            <button><LinkedinOutlined /> </button>
            <button><CodepenOutlined /></button>
            <button><GithubOutlined /></button>
          </div>
    </section>
    </main>
  )
}

export default Contact