import Image from "next/image";
import { useSelector } from 'react-redux';
import styles from './sidebar.module.css';
//import Modal from '../modal/modal';
import languageData from '../../public/json/languages.json' assert { type: 'JSON' };
import BackendList from '../backendList/backendList';

export default function SideBar() {
  const language = useSelector((state) => state.language.language);
  const languageStrings = languageData[0][language];

  //<Modal btnText='Select a Backend' btnClassName="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" className="flex items-center justify-center" title="Select a Backend" text={languageStrings["sideBar.stacksModal"]}></Modal>
  //<Modal btnText='Escoge el backend' btnClassName="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" className="flex items-center justify-center" title="Escoge el Backend" text={languageStrings["sideBar.stacksModal"]}></Modal>

  return (
    <aside className="w-4/5 md:w-1/3 lg:w-1/3 xl:w-1/4 px-3 py-4 sm:py-10 mx-auto text-center text-white">
      <section className={styles.diagonal}>
        <Image src="/images/daniel.png" alt="Daniel" width={200} height={200} className="rounded-full mx-auto" priority={true}/>
        <h1 role="name" className="text-2xl md:text-4xl">Daniel Muñoz Gil</h1>
        <h2 role="title" className="font-mono font-semibold text-xl md:text-2xl">Full Stack Developer</h2>
        <Image role="toque" src="/images/toque.png" alt="image" width={200} height={25} className="mx-auto"/>        
      </section>
      <section className={styles.diagonal2}>
        {(language == "en") &&
        <>
          <p className="font-semibold text-lg">Built with React, NextJS, </p>
          <span className="font-semibold text-lg">Tailwind, Jest, Cypress & </span>
            <svg className="w-6 h-6 mb-2 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          <div>
            Select a Data Source<BackendList className="justify-center"/>
            <br />
          </div>
        </>
        }
        {(language == "es") &&
        <>
          <p className="font-semibold text-lg">Creado con React, NextJS, </p>
          <span className="font-semibold text-lg">Tailwind, Jest, Cypress y </span>
            <svg className="w-6 h-6 mb-2 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          <div>
            Elige origen de datos<BackendList className="justify-center"/>
            <br />
          </div>
        </>
        }
      </section>
    </aside>
  );
}
