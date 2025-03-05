import '../LandingPage.scss'

function Contact({img, h1, p, link}){
    return(
        <section className='Contact'>
            <a href={link} className='Contact-Ball'>
                <img src={img} />
            </a>
            <div className='Contact-Text'>
                <h1>
                    {h1}
                </h1>
                <p>
                    {p}
                </p>
            </div>
        </section>
    )
}
export default Contact;