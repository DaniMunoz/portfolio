import { useSelector } from 'react-redux';
import React from 'react';
import Image from "next/image";
//import { css } from '@emotion/core';
import styles from './projectList.module.css'

const ProjectList = ({ projects }) => {
  const language = useSelector((state) => state.language.language);

  {/*
    <div key={project.id} role="projectCard" className='max-w-xs rounded overflow-hidden shadow-lg m-4'>
      <Image className='object-cover relative w-full h-48 rounded-md overflow-hidden' src={project.image} alt={project.project_en} width={267} height={138}/>
      <div className="px-6 py-4">
        { (language == "en") && <h2 className="font-medium text-lg mb-2">{project.project_en}</h2>}
        { (language == "es") && <h2 className="font-medium text-lg mb-2">{project.project_es}</h2>}
        <p className="text-gray-700 text-base">{project.customer}</p>
        <p className={styles.container + " text-gray-700 text-base"} dangerouslySetInnerHTML={{__html: project.technologies}}></p>
      </div>
      <div className="px-6 py-4">
        { (language == "en") &&<a href={project.customer_web} className="underline text-blue-500" target="_blank" rel="noreferrer">Visit website</a>}
        { (language == "es") &&<a href={project.customer_web} className="underline text-blue-500" target="_blank" rel="noreferrer">Visitar Web</a>}
      </div>
    </div>
 */}

 {/*
    
*/}

{/*
    <div key={project.id} role="projectCard" className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl max-w-xs overflow-hidden m-4">
      <a className="block rounded-xl bg-white p-6 sm:p-8" href="">
        <div className="mt-16 sm:pr-8">
          { (language == "en") && <h3 className="text-xl font-bold text-gray-900">{project.project_en}</h3>}
          { (language == "es") && <h3 className="text-xl font-bold text-gray-900">{project.project_es}</h3>}
          <p className={styles.container + " mt-2 text-sm text-gray-500"} dangerouslySetInnerHTML={{__html: project.technologies}}></p>
        </div>
      </a>
    </div>
*/}

{/** */}

  const cards = projects.map((project) => (    
    <a key={project.id} role="projectCard" href="#" className="relative block overflow-hidden rounded-lg border border-gray-100 p-0 max-w-sm m-4">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          { (language == "en") && <h3 className="p-2 text-lg font-bold text-gray-900">{project.project_en}</h3>}
          { (language == "es") && <h3 className="p-2 text-lg font-bold text-gray-900">{project.project_es}</h3>}
          <a href={project.customer_web} className="mt-1 text-xs font-medium text-gray-600" target="_blank" rel="noreferrer">{project.customer}</a>
        </div>

        <div className="ml-3 hidden flex-shrink-0 sm:block">
          <Image alt={project.project_en} className="h-16 w-32 rounded-lg object-cover shadow-sm" height={64} width={128} src={project.image}/>
        </div>
      </div>

      <div className="mt-4 sm:pr-8 p-4">
        { (language == "en") && <p className="text-base text-gray-900">{project.summary_en}</p>}
        { (language == "es") && <p className="text-base text-gray-900">{project.summary_es}</p>}
        {
          project.technologies.map((tech) => {
            return (
            <span key={tech.tech} class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{tech.tech}</span>
          )})
        }        
      </div>
    </a>
  ))

  return (cards);
};


export default ProjectList;