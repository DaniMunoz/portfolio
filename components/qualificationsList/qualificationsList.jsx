import { useSelector } from 'react-redux';
import React from 'react';
import Image from "next/image";
//import { css } from '@emotion/core';
import styles from './qualificationsList.module.css'

const QualificationsList = ({ qualifications }) => {   
  const language = useSelector((state) => state.language.language);
  const cards = qualifications.map((qualification) => (
    <div key={qualification.id} className='max-w-sm rounded overflow-hidden shadow-lg m-4'>
      <img className='w-full h-64 object-cover rounded-t' src={qualification.image} alt={qualification.title_en} />
      <div className="px-6 py-4">
        { (language == "en") && <h2 className="font-medium text-lg mb-2">{qualification.title_en}</h2>}
        { (language == "en") && <p className="text-gray-700 text-base">{qualification.institution_en}</p> }
        { (language == "en") && <p className={styles.container + " text-gray-700 text-base"} dangerouslySetInnerHTML={{__html: qualification.text_en}}></p>}

        { (language == "es") && <h2 className="font-medium text-lg mb-2">{qualification.title_es}</h2>}
        { (language == "es") && <p className="text-gray-700 text-base">{qualification.institution_es}</p> }
        { (language == "es") && <p className={styles.container + " text-gray-700 text-base"} dangerouslySetInnerHTML={{__html: qualification.text_es}}></p>}

        {/*
        <p className="text-gray-700 text-base">{qualification.text_en}</p>
        <p className="text-gray-700 text-base">{qualification.text_es}</p>
        */}
      </div>
      { qualification.type == 'certification' &&
        <div className="px-6 py-4">
        { (language == "en") && <a href={qualification.link} className="underline text-blue-500" target="_blank" rel="noreferrer">Check Certification</a>}
        { (language == "es") && <a href={qualification.link} className="underline text-blue-500" target="_blank" rel="noreferrer">Ver Certificación</a>}
        </div>
      }
    </div>
  ))
  return (cards);
};


export default QualificationsList;