import './LandingPage.scss';
import Memoji1 from './assets/images/melhor-removebg-preview.png';

function App() {  
  return (
    <body className='Body'>
      <header className='Header'>
        <a href='#Sobre'>Sobre</a>
        <a href='#Projetos'>Projetos</a>
        <a href='#Contato'>Contato</a>
      </header>
      <main className='Main'>
        <section className='Track-Home'>
          <div className='Home-Texts'>
            <h1>
              Olá, Seja Bem Vindo!  
            </h1>
            <p>
              Meu Nome é Kalel e esse é meu portfólio 😁
            </p>
          </div>
          <div className='Home-Image'>
            <img src={Memoji1}/>
          </div>
          <div className='Home-Ball' />
        </section>
        <section className='Track-About'>
         <div className='About-Texts'>
            <h1>
              Quem Sou Eu?  
            </h1>
            <p>
              Tenho 18 anos e sou um jovem apaixonado pela área da tecnologia!
            </p>
          </div>
        </section>
        <section className='Track-Languages'>
        
        </section>
        <section className='Track-Habilities'>
        
        </section>
        <section className='Track-Projects'>
        
        </section>
        <section className='Track-Contacts'>
        
        </section>
      </main>
      <footer className='Footer'>

      </footer>
    </body>
  );
}
export default App;
