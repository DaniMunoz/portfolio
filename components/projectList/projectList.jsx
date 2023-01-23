import React from 'react';
import Image from "next/image";
//import { css } from '@emotion/core';

const ProjectList = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <div className='max-w-sm rounded overflow-hidden shadow-lg m-4'
           key={project.id}>
          <img className='w-full h-64 object-cover rounded-t' src={project.image} alt={project.project} />
          <div className="px-6 py-4">
            <h2 className="font-medium text-lg mb-2">{project.project}</h2>
            <p className="text-gray-700 text-base">{project.customer}</p>
            <p className="text-gray-700 text-base">{project.technologies}</p>
            <p className="text-gray-700 text-base">{project.text_en}</p>
            <p className="text-gray-700 text-base">{project.text_es}</p>
          </div>
          <div className="px-6 py-4">
            <a href={project.customer_web} className="underline text-blue-500">Visit website</a>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProjectList;