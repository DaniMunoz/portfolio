import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MainContent from "./mainContent";
import store from "../../src/store/store";

const fakeGradient = "";
const fakeProjects = [
  { id: 1,
    project_en: "Personal Portfolio",
    project_es: "Portafolio Personal",
    image: "/images/daniel-round-96.png",
    customer: "",
    customer_web: "",
    summary_en: "To show my Full Stack Developer experience with different tech stacks, projects and companies. As well as my Academic achievements & Certifications",
    summary_es: "Para mostrar mi experiencia <b>Full Stack Developer</b> con distintas tecnologías, proyectos y empresas. Así como mis logros académicos y certificaciones",
    technologies: [ { "tech": "React"}, { "tech": "NextJS"}, { "tech": "NodeJS"}],
    text_en: "<p>This website, created from scratch with::</p><ul className='bg-slate-300'><li>React, NextJS and TailwindCSS</li><li>TDD with Jest, React Testing Library and Cypress</li></ul><p>&nbsp;</p><p>Data (projects, titles, certifications...) is obtained from different backends, at user's choice (under development):</p><ul><li>NextJS: Local JSON files</li><li>MongoDB</li><li>Google Firestore</li><li>NodeJS + PostgreSQL</li><li>Google Cloud: Java + Datastore</li><li>AWS</li></ul><p>&nbsp;</p><p>Available on <a href='https://github.com/DaniMunoz/portfolio' target='_blank' rel='noreferrer'>Github</a></p>",
    text_es: "<p>Esta Web, creada desde cero con:</p><ul className='bg-slate-300'><li>React, NextJS y TailwindCSS</li><li>TDD con Jest, React Testing Library y Cypress</li></ul><p>&nbsp;</p><p>Los datos (proyectos, títulos, certificaciones…) se obtienen de diversos backends, a elección del usuario (en desarrollo):</p><ul><li>NextJS: Ficheros JSON locales</li><li>MongoDB</li><li>Google Firestore</li><li>NodeJS + PostgreSQL</li><li>Google Cloud: Java + Datastore</li><li>AWS</li></ul><p>&nbsp;</p><p>Disponible en <a href='https://github.com/DaniMunoz/portfolio' target='_blank' rel='noreferrer'>Github</a></p>"
  },
  { id: 2,
    project_en: "Solidarity Android App & Cloud Backend",
    project_es: "App Android Solidaria - Backend en la Nube",
    image: "/images/3warnings-96.png",
    customer: "3warnings",
    customer_web: "https://www.3warnings.com/",
    summary_en: "Solidarity Android app for instant messaging. With small ads, whose income is mainly destined to NGOs. End-to-end encryption, groups, etc.",
    summary_es: "App Android solidaria de mensajería instantánea. Con anuncios pequeños, cuyos ingresos se destinan principalmente a ONGs. Encriptación, grupos, etc",
    technologies: [ { "tech": "Android"}, { "tech": "Java"}, { "tech": "Google_Cloud"}],
    text_en: "<img src='../../images/3warnings.png'/><p>&nbsp;</p><p>Free solidary messaging app</p><ul><li>Scalable - Cloud Backend</li><li>End to end encryption</li><li>Groups, photos, audio, emoji, gifs…</li></ul><p>&nbsp;</p><p>Created with:</p><ul><li>Android (Java)</li><li>Google Cloud</li><li>App Engine, Cloud Endpoints</li><li>Datastore, MemCache, TaskQueues</li><li>Firebase Cloud Messaging</li><li>Google Cloud Storage</li><li>and more...</li></ul><p>&nbsp;</p><p>Sole developer on the project</p><p>&nbsp;</p><p>Available <a href='https://3warnings.com/' target='_blank' rel='noreferrer'>here</a></p>",
    text_es: "<img src='../../images/3warnings.png'/><p>&nbsp;</p><p>App solidaria de mensajería instantánea</p><ul><li>Escalable - Backend en la nube</li><li>Encriptación extremo a extremo</li><li>Grupos, fotos, audio, emoticonos, gifs…</li></ul><p>&nbsp;</p><p>Creada con:</p><ul><li>Android (Java)</li><li>Google Cloud</li><li>App Engine, Cloud Endpoints</li><li>Datastore, MemCache, TaskQueues</li><li>Firebase Cloud Messaging</li><li>Google Cloud Storage</li><li>y más...</li></ul><p>&nbsp;</p><p>Único desarrollador en el proyecto</p><p>&nbsp;</p><p>Disponible <a href='https://3warnings.com/' target='_blank' rel='noreferrer'>aquí</a></p>"
  }
];
const fakeQualifications = [
  { id: 1,
    type: "degree",
    image: "/images/uah-128.png",
    link: "https://sede.educacion.gob.es/registrotitulos/mostrarAutorizacion.action?ticket=24bc19b432c7aa66770e9dca748dcb0d222f6fe8",
    institution_en: "UAH - Alcalá University (Spain)",
    institution_es: "UAH - Universidad de Alcalá",
    title_en: "M.Sc. Web Software Engineering",
    title_es: "Máster en Ingeniería del Software para la Web",
    text_en: "",
    text_es: ""
  },
  {
    id: 2,
    type: "degree",
    image: "/images/uma-128.png",
    link: "https://sede.educacion.gob.es/registrotitulos/mostrarAutorizacion.action?ticket=24bc19b432c7aa66770e9dca748dcb0d222f6fe8",
    institution_en: "UMA - Málaga University (Spain)",
    institution_es: "UMA - Universidad de Málaga",
    title_en: "Computer Science Degree",
    title_es: "Grado en Informática",
    text_en: "University degree with a focus on Information Systems and Software Engineering",
    text_es: ""
  }
];

describe("MainContent", () => {

  it('renders the MainContent component', () => {
    //const { getByText } = render(<Header />);
    render(<Provider store={store}><MainContent gradient={fakeGradient} projectsData={fakeProjects} qualificationsData={fakeQualifications}/></Provider>);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

});

describe('MainContent', () => {

  it('renders props properly', async () => {
    
    render(<Provider store={store}><MainContent gradient={fakeGradient} projectsData={fakeProjects} qualificationsData={fakeQualifications}/></Provider>);
  
    expect(await screen.findByText('Personal Portfolio')).toBeInTheDocument()
    expect(await screen.findByText('Solidarity Android App & Cloud Backend')).toBeInTheDocument()

    //Qualifications props need to be tested as integration tests, as user clicks on Header's qualifications button
    //expect(await screen.findByText('M.Sc. Web Software Engineering')).toBeInTheDocument()
    //expect(await screen.findByText('Computer Science Degree')).toBeInTheDocument()
  
    //expect(screen.queryByText('No users found')).not.toBeInTheDocument()
  })

  //test('renders error when API call fails', async () => {})
})

