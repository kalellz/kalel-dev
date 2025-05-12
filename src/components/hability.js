import '../LandingPage.scss'

function Hability({ button, h1, p, img }){
    if(button){
        return(
            <section className='Hability'>
                <div className='Hability-Text'>
                    <h1>
                        {h1}
                    </h1>
                    <div>
                        <img src={img}/>
                    </div>
                    <p>
                        {p}
                    </p>
                </div>
                <div>
                    <a  href="/Curriculo.pdf" download={true}
                        className='Hability-Button'>
                        {button}
                    </a>
                </div>
            </section>
        )
    } else{
        return(
            <section className='Hability'>
                <div className='Hability-Text'>
                    <h1>
                        {h1}
                    </h1>
                    <div>
                        <img src={img}/>
                    </div>
                    <p>
                        {p}
                    </p>
                </div>
            </section>
        )
    }
    
}
export default Hability;