import '../LandingPage.scss'

function Hability({ position, h1, p, img }){
    if(position === 1){
        return(
            <section className='Hability'>
                <div>
                    <img src={img}/>
                </div>
                <div className='Hability-Text'>
                    <h1>
                        {h1}
                    </h1>
                    <p>
                        {p}
                    </p>
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
                    <p>
                        {p}
                    </p>
                </div>
                <div>
                    <img src={img}/>
                </div>
            </section>
        )
    }
    
}
export default Hability;