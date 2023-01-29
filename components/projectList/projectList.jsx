import { useSelector } from 'react-redux';
import React from 'react';
import Image from "next/image";
//import { css } from '@emotion/core';
import styles from './projectList.module.css'

const ProjectList = ({ projects }) => {
  const language = useSelector((state) => state.language.language);

  const cards = projects.map((project) => (
    <div key={project.id} className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
      <img className='w-full h-64 object-cover rounded-t' src={project.image} alt={project.project} />
      <div className="px-6 py-4">
        { (language == "en") && <h2 className="font-medium text-lg mb-2">{project.project_en}</h2>}
        { (language == "es") && <h2 className="font-medium text-lg mb-2">{project.project_es}</h2>}
        <p className="text-gray-700 text-base">{project.customer}</p>
        <p className={styles.container + " text-gray-700 text-base"} dangerouslySetInnerHTML={{__html: project.technologies}}></p>
        {/*
        <p className="text-gray-700 text-base">{project.text_en}</p>
        <p className="text-gray-700 text-base">{project.text_es}</p>
        */}
      </div>
      <div className="px-6 py-4">
        { (language == "en") &&<a href={project.customer_web} className="underline text-blue-500" target="_blank" rel="noreferrer">Visit website</a>}
        { (language == "es") &&<a href={project.customer_web} className="underline text-blue-500" target="_blank" rel="noreferrer">Visitar Web</a>}
      </div>
    </div>
  ))
  return (cards);
};


export default ProjectList;