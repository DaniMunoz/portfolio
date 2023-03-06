import Image from "next/image";
import { useSelector } from 'react-redux';
import styles from './sidebar.module.css';
//import Modal from '../modal/modal';
import languageData from '../../public/json/languages.json' assert { type: 'JSON' };
import BackendList from '../backendList/backendList';

export default function SideBar() {
  const language = useSelector((state) => state.language.language);
  const showContact = useSelector((state) => state.showContact.showContact);

  const languageStrings = languageData[0][language];

  //<Modal btnText='Select a Backend' btnClassName="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" className="flex items-center justify-center" title="Select a Backend" text={languageStrings["sideBar.stacksModal"]}></Modal>
  //<Modal btnText='Escoge el backend' btnClassName="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" className="flex items-center justify-center" title="Escoge el Backend" text={languageStrings["sideBar.stacksModal"]}></Modal>
  //<section className={styles.diagonal}>

  //" absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r "
  //" transition-all duration-500 " + fromColor + " " + viaColor + " " + toColor + " bg-size-200 group-hover:bg-right-bottom"
  // + " rounded-[30px] -skew-y-6 absolute inset-x-0 bottom-0 bg-gradient-to-r transition-all duration-500 from-green-400 via-amber-200 to-violet-400 bg-size-200 hover:bg-right-bottom"
  
  /*background: linear-gradient(45deg, var(--c1, #12c2e9), var(--c2, #c471ed) 51%, var(--c1, #f64f59)) var(--x, 0)/ 200%;
  --background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  */
  /**
   * .diagonal:hover {
      --x: 100%;
      }
   */
  

  return (
    <aside className="w-4/5 md:w-1/3 lg:w-1/3 xl:w-1/4 px-3 py-4 sm:py-10 mx-auto text-center text-white">
      {showContact && 
        <section className={styles.diagonal + " group"}>
          <Image src="/images/daniel.png" alt="Daniel" width={200} height={200} className="rounded-full mx-auto" priority={true}/>
          <h1 role="name" className="text-lg transition-all duration-500">Daniel Muñoz Gil</h1>
          <h2 role="title" className="font-mono font-semibold text-lg transition-all duration-500">Full Stack Developer</h2>
          <Image role="toque" src="/images/3w.png" alt="image" width={284} height={27} className="mx-auto animate-bounce mt-3 w-[284px] transition-all duration-500"/>
        </section>
      }
      {!showContact && 
        <section className={styles.diagonal + " group"}>
          <Image src="/images/daniel.png" alt="Daniel" width={200} height={200} className="rounded-full mx-auto" priority={true}/>
          <h1 role="name" className="text-2xl transition-all duration-500 group-hover:text-lg">Daniel Muñoz Gil</h1>
          <h2 role="title" className="font-mono font-semibold text-xl transition-all duration-500 group-hover:text-lg">Full Stack Developer</h2>
          <Image role="toque" src="/images/3w.png" alt="image" width={284} height={27} className="mx-auto group-hover:animate-bounce mt-3 w-[225px] transition-all duration-500 group-hover:w-[284px]"/>
        </section>
      }
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
