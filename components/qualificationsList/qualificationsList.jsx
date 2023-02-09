import { useSelector } from 'react-redux';
import React from 'react';
import Image from "next/image";
import styles from './qualificationsList.module.css';

const QualificationsList = ({ qualifications }) => {   
  const language = useSelector((state) => state.language.language);
  const cards = qualifications.map((qualification) => (
    <figure key={qualification.id}  role="qualificationCard" className="flex bg-slate-100 rounded-xl p-0 dark:bg-slate-100 hover:bg-white max-w-sm m-4 drop-shadow-md hover:drop-shadow-xl shadow-slate-900">
      <Image className="rounded-l-xl w-48 h-auto mx-auto" src={qualification.image} alt="" width="120" height="100" />
      <div className="pt-2 p-2 sm:pt-4 sm:p-4 text-left space-y-4 w-80 sm:w-96 relative">
        <figcaption className="text-sm sm:text-base font-medium">          
          { (language == "en") && <div className="text-sky-500 dark:text-sky-500">{qualification.title_en}</div>}
          { (language == "es") && <div className="text-sky-500 dark:text-sky-500">{qualification.title_es}</div>}
          
          { (language == "en") && <div className="text-slate-700 dark:text-slate-400">{qualification.institution_en}</div> }
          { (language == "es") && <div className="text-slate-700 dark:text-slate-400">{qualification.institution_es}</div> }

          { qualification.type == 'degree' && 
            <div className="absolute bottom-3 right-3 text-blue-500">
              { (language == "en") && <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                          </svg>
                                          &nbsp;<a href={qualification.link} className="underline bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-white font-bold py-1 px-2 rounded hover:rounded-full text-[12px]" target="_blank" rel="noreferrer">See University Degree</a>
                                          </>}
            { (language == "es") && <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                      </svg>
                                      &nbsp;<a href={qualification.link} className="underline bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-white font-bold py-1 px-2 rounded hover:rounded-full text-[12px]" target="_blank" rel="noreferrer">Ver Título Universitario</a>
                                      </>}
            </div>}

          { qualification.type == 'certification' &&
            <div className="absolute bottom-2 right-2">
            { (language == "en") && <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline text-green-500">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                    &nbsp;<a href={qualification.link} className="underline bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-white font-bold py-1 px-2 rounded hover:rounded-full text-[12px]" target="_blank" rel="noreferrer">See Certification</a>
                                    </>}
            { (language == "es") && <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline text-green-500">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                    &nbsp;<a href={qualification.link} className="underline bg-gradient-to-r from-blue-400 to-green-500 hover:from-blue-500 hover:to-green-600 text-white font-bold py-1 px-2 rounded hover:rounded-full text-[12px]" target="_blank" rel="noreferrer">Ver Certificación</a>
                                    </>}
            </div>          
          }
        </figcaption>
      </div>
    </figure>    
  ))
  return (cards);
};


export default QualificationsList;