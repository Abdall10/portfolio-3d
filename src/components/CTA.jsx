import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">Have a project in mind?<br className="sm:block hidden"/>
      <span className="text-blue-400">Let's build something together Don't hesitate and tell me!</span>
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  )
}

export default CTA
