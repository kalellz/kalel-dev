import './LandingPage.scss';
import Hability from './components/hability';

import Memoji1 from './assets/images/melhor-removebg-preview.png';
import Memoji2 from './assets/images/IMG_8239__1_-removebg-preview.png';
import Memoji3 from './assets/images/IMG_8240-removebg-preview 1.png';
import Memoji4 from './assets/images/IMG_8244-removebg-preview 1.png';
import Me from './assets/images/C5CDF8CF-3398-4C9F-A190-71C9874A741C.jpeg';

import Csharp from './assets/images/languages/c-sharp-c-icon-1822x2048-wuf3ijab.png';
import Js from './assets/images/languages/javascript.png';
import Node from './assets/images/languages/nodejs-logo-svgrepo-com.svg';
import React from './assets/images/languages/react-icon-1024x897-k6c5dil3.png';

import Github from './assets/images/languages/github.png';
import Materialui from './assets/images/languages/material-ui-icon-1024x814-sytj0yhk 1.png';
import Mysql from './assets/images/languages/mysql.png';
import Htmlcss from './assets/images/languages/htmlcss.png';

import Logic from './assets/images/habilities/logica.png';
import Fullstack from './assets/images/habilities/fullstack.png';
import Equipe from './assets/images/habilities/equipe.png';

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
          <div className='Home-Ball'>
            <img src={Memoji2}/>
          </div>
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
          <header className='Languages-Header'>
            <div className='Header-Div'>
              <img src={Js}/>
              <img src={React}/>
              <img src={Node}/>
              <img src={Csharp}/>
            </div>
            <div className='Header-Div'>
              <img src={Github}/>
              <img src={Materialui}/>
              <img src={Mysql}/>
              <img src={Htmlcss}/>
            </div>
          </header>
          <div className='Languages-Ball'>
            <img src={Me}/>
          </div>
          <div className='Languages-Text'>
              <p>
                Tenho 18 anos e sou um jovem apaixonado pela área da tecnologia!
              </p>
            </div>
        </section>
        <section className='Track-Habilities'>
          <header className='Habilities-Header'>
            <h1>
              Minhas habilidades
            </h1>
          </header>
          <main className='Habilities-Main'>
            <Hability position={1} img={Logic}
            h1="Lógica" 
            p="Tenho uma base sólida e uma lógica de programação bem desenvolvida, o que me permite desenvolver projetos que envolvem o uso de APIs, integração com bancos de dados e a criação de componentes reutilizáveis. Busco sempre escrever um código que garanta a escalabilidade e a boa manutenção dos meus projetos. 🚀"
            />
            <Hability position={2} img={Fullstack}
            h1="Full-Stack" 
            p="Tenho experiência no desenvolvimento full-stack, manipulando tecnologias como Node.js, React, JavaScript, C#, MySQL, Next.js, Vue.js e Vercel. Além disso, utilizo Sass, Material UI e outras bibliotecas para criar aplicações modernas, responsivas e escaláveis. Minha abordagem visa otimizar desempenho e usabilidade, garantindo um código eficiente e bem estruturado. 🌍"
            />
            <Hability position={1} img={Equipe}
             h1="Equipe & Organização" 
             p="Escrevo códigos limpos e fáceis de entender, facilitando a colaboração em equipe e a manutenção dos projetos. Enquanto aprendo inglês intermediário/avançado, também aprimoro minhas habilidades de comunicação para tornar o trabalho em equipe ainda mais eficiente. Utilizo ferramentas como Figma, Trello, GitHub e outras plataformas de gerenciamento para manter o fluxo de trabalho organizado e produtivo. Acredito que a comunicação e a clareza no código são essenciais para o sucesso de qualquer projeto.🤝"
             />
          </main>
        </section>
        <section className='Track-Projects'>
          <h1>
            Novos Projetos Em Breve...
          </h1>
          <div className='Project-Main'>

          </div>
          <img src={Memoji3} />
        </section>
        <section className='Track-Contacts'>
          <div className='Contacts-Title'>
            <h1>Contatos</h1>
          </div>
          <div className='Contacts-Main'>
            
          </div>
          <div className='Contacts-Text'>
            <div>
              <h1>Sempre Em Busca da Evolução! 🚀</h1>
              <p>A tecnologia está em constante transformação, e eu também! Vamos construir algo incrível juntos? 💡✨</p>
            </div>
            <img src={Memoji4}/>
          </div>
        </section>
      </main>
      <footer className='Footer'>

      </footer>
    </body>
  );
}
export default App;
