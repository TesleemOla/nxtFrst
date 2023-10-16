import Nav from "../../Components/Nav";

const About = () => {
  return (
    <div>
        <Nav />
        <h1>about</h1>
        <main className="main">
        <section>
          <p>
            I am a frontend developer.
            I enjoy creating things that live on the internet, whether that be websites, applications, or
            anything in between. I have been freelancing for a while and have experience working remotely
            with a UK based startup. I have gained a lot of experience and
            valuable knowledge from all different kinds of fields throughout my projects/work.
          </p>
        </section>
        <section>
          <p>Experience</p>
          <div>
            <p>IKOOK UK</p>
            <p>London, UK (Remote)</p>
            <div>
            <p>Frontend Intern <span>Oct 2022 - February 2023</span></p>
            <p>Frontend Developer <span>March 2023 - October 2023</span></p>

            </div>
          </div>
        </section>
        
        </main>
    </div>
    
  )
}
export default About;
