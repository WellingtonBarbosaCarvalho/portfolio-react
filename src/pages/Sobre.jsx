// src/components/Sobre.jsx
import React from 'react';
import './About.css';

function Sobre() {
  return (
    <main className="about-page">
      <h1>Sobre Wellington Barbosa de Carvalho</h1>
      <div className="bio">
        <p>
          Olá! Me chamo <strong>Wellington Barbosa de Carvalho</strong>, sou Desenvolvedor Full Stack e entusiasta da tecnologia. Minha jornada no desenvolvimento começou como uma curiosidade e rapidamente se transformou em minha principal área de atuação. Sou apaixonado por resolver problemas, criar soluções eficientes e desenvolver aplicações escaláveis que agreguem valor aos usuários e empresas.
        </p>
        <p>
          Com experiência em desenvolvimento web e mobile, meu foco é criar interfaces modernas e intuitivas, seguindo boas práticas de código e metodologias ágeis. Além do desenvolvimento, também atuo na gestão digital de empresas, ajudando pequenos negócios a fortalecerem sua presença online e crescerem no ambiente digital.
        </p>
      </div>

      <section className="stacks">
        <h2>💻 Stacks que Domino</h2>

        {/* Front-end */}
        <div className="stack-group">
          <h3>Front-end</h3>
          <ul className="stack-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React.js"
              />
              <span>React.js</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
              />
              <span>HTML5</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
              />
              <span>CSS3</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
              <span>JavaScript (ES6+)</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
              />
              <span>TypeScript</span>
            </li>
          </ul>
        </div>

        {/* Back-end */}
        <div className="stack-group">
          <h3>Back-end</h3>
          <ul className="stack-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
              />
              <span>Node.js</span>
            </li>
            <li>
              <img
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*H3kMijpiv2QW_4l0.jpg"
                alt="Express.js"
              />
              <span>Express.js</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
              />
              <span>MySQL</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
              />
              <span>PostgreSQL</span>
            </li>
          </ul>
        </div>

        {/* Arquitetura */}
        <div className="stack-group">
          <h3>Arquitetura</h3>
          <ul className="stack-list">
            <li>
              <img
                src="https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg"
                alt="APIs REST"
              />
              <span>APIs REST</span>
            </li>
            <li>
              <img
                src="https://www.w2solution.co.jp/wp-content/uploads/2023/01/MVCS-.png"
                alt="MSC"
              />
              <span>MSC (Model-Service-Controller)</span>
            </li>
          </ul>
        </div>

        {/* Ferramentas & Métodos */}
        <div className="stack-group">
          <h3>Ferramentas & Métodos</h3>
          <ul className="stack-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
              />
              <span>Git</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
              <span>GitHub</span>
            </li>
            <li>
              <img
                src="https://www.brightwork.com/wp-content/uploads/Scrum-vs-Kanban-1-scaled.webp"
                alt="Metodologias Ágeis"
              />
              <span>Scrum / Kanban</span>
            </li>
          </ul>
        </div>

        {/* Testes */}
        <div className="stack-group">
          <h3>Testes</h3>
          <ul className="stack-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                alt="Jest"
              />
              <span>Jest</span>
            </li>
            <li>
              <img
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1667841814644/FioaMUPMO.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt="React Testing Library"
              />
              <span>RTL</span>
            </li>
            <li>
              <img
                src="https://www.thoughtworks.com/content/dam/thoughtworks/images/photography/inline-image/insights/blog/testing/blg_inline_TDD_as_a_scaffold_diagram.jpg"
                alt="TDD"
              />
              <span>TDD</span>
            </li>
          </ul>
        </div>

        {/* Outras Tecnologias */}
        <div className="stack-group">
          <h3>Outras Tecnologias</h3>
          <ul className="stack-list">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React Native"
              />
              <span>React Native</span>
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                alt="Next.js"
              />
              <span>Next.js</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              />
              <span>MongoDB</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                alt="Firebase"
              />
              <span>Firebase</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                alt="Docker"
              />
              <span>Docker</span>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
              />
              <span>Python &amp; Scraping</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
