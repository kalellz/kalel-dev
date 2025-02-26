import '../LandingPage.scss'

function Contact({img, h1, p}){
    return(
        <section className='Contact'>
            <div className='Contact-Ball'>
                <img src={img} />
            </div>
            <div>
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