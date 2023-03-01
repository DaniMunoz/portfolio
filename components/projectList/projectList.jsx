import { useSelector } from 'react-redux';
import React from 'react';
import Image from "next/image";
import randomGradients from '../../src/randomGradient.js';
import Modal from '../modal/modal';
import dynamic from 'next/dynamic';

const ProjectList = ({ projects }) => {

  //RandomGradient needs to render side client. Otherwise, server and client classNames clash
  const RandomGradient = dynamic(() => 
    import('../randomGradient/randomGradient'), {
        ssr: false,
    });

  const language = useSelector((state) => state.language.language);

  let gradientes = [];
  gradientes = projects.map(() => {
    return randomGradients.staticGradient();
  })
  
  const cards = projects.map((project, i) => (
    <div key={project.id} role="projectCard" href="#" className="relative block overflow-hidden rounded-lg p-0 max-w-sm m-8 bg-slate-100 hover:bg-white drop-shadow-md hover:drop-shadow-xl shadow-slate-900 w-80 sm:w-96">
      <RandomGradient id={"gradiente-" + project.id}></RandomGradient>

      <div className="justify-between flex">
        <div className="ml-0 flex-shrink-0 block">
          <a href={project.customer_web} target="_blank" rel="noreferrer">
            <Image alt={project.project_en} className="h-24 w-24 rounded-tl-lg object-cover" height={96} width={96} src={project.image}/>
          </a>
        </div>

        <div className='bg-slate-200 w-full text-left relative'>
          { (language == "en") && <h3 className="p-2 text-lg font-bold text-sky-500 dark:text-sky-500">{project.project_en}</h3>}
          { (language == "es") && <h3 className="p-2 text-lg font-bold text-sky-500 dark:text-sky-500">{project.project_es}</h3>}
          <a href={project.customer_web} className="p-2 text-sm font-medium text-slate-400 absolute bottom-0 left-0 no-underline" target="_blank" rel="noreferrer">{project.customer}</a>
          { (language == "en") && <Modal btnText="More" btnClassName="bg-blue-400 hover:bg-blue-500 text-white text-sm px-2 py-1 rounded absolute bottom-2 right-2"
                                    title={project.project_en} text={project.text_en}/>}
          { (language == "es") && <Modal btnText="Más" btnClassName="bg-blue-400 hover:bg-blue-500 text-white text-sm px-2 py-1 rounded absolute bottom-2 right-2"
                                    title={project.project_es} text={project.text_es}/>}
        </div>
        
      </div>

      <div className="sm:pr-8 p-3 text-justify text-sm">
        { (language == "en") && <p className="text-gray-900 p-2" dangerouslySetInnerHTML={{__html: project.summary_en}}></p>}
        { (language == "es") && <p className="text-gray-900 p-2" dangerouslySetInnerHTML={{__html: project.summary_es}}></p>}
        <div className="p-2 mt-2">
        {
          project.technologies.map((tech) => {            
              switch (tech.tech) {
                case ".NET":
                  return <span key={tech.tech} className="bg-blue-400 text-blue-100 dark:bg-blue-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Android":
                  return <span key={tech.tech} className="bg-green-500 text-green-100 dark:bg-green-500 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;                  
                case "AutoCAD":
                  return <span key={tech.tech} className="bg-rose-400 text-rose-100 dark:bg-rose-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "AWS_Lambda":
                  return <span key={tech.tech} className="bg-amber-400 text-amber-100 dark:bg-amber-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "AWS_DynamoDB":
                  return <span key={tech.tech} className="bg-indigo-400 text-indigo-100 dark:bg-indigo-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Blender":
                  return <span key={tech.tech} className="bg-violet-400 text-violet-100 dark:bg-violet-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Bootstrap":
                  return <span key={tech.tech} className="bg-violet-400 text-violet-100 dark:bg-violet-400 dark:text-white text-xs font-medium mr-2 px-2 py-1 rounded-full ">{tech.tech}</span>;
                case "DBNetSuite":
                  return <span key={tech.tech} className="bg-emerald-400 text-emerald-100 dark:bg-emerald-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Flash_MX":
                  return <span key={tech.tech} className="bg-indigo-400 text-indigo-100 dark:bg-indigo-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Google_Cloud":
                  return <span key={tech.tech} className="bg-orange-400 text-orange-100 dark:bg-orange-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "IBM_Watson":
                  return <span key={tech.tech} className="bg-pink-400 text-pink-100 dark:bg-pink-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Java":
                  return <span key={tech.tech} className="bg-red-400 text-red-100 dark:bg-red-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "JS":
                  return <span key={tech.tech} className="bg-yellow-400 text-yellow-100 dark:bg-yellow-400 dark:text-black text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Meta4":
                  return <span key={tech.tech} className="bg-sky-400 text-sky-100 dark:bg-sky-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "MongoDB":
                  return <span key={tech.tech} className="bg-lime-400 text-lime-100 dark:bg-lime-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "NextJS":
                  return <span key={tech.tech} className="bg-pink-400 text-pink-100 dark:bg-pink-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "NodeJS":
                  return <span key={tech.tech} className="bg-green-400 text-green-100 dark:bg-green-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "PHP":
                  return <span key={tech.tech} className="bg-violet-400 text-violet-100 dark:bg-violet-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "PostgreSQL":
                  return <span key={tech.tech} className="bg-sky-400 text-sky-100 dark:bg-sky-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Prisma":
                  return <span key={tech.tech} className="bg-green-400 text-green-100 dark:bg-green-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "React":
                  return <span key={tech.tech} className="bg-purple-400 text-purple-100 dark:bg-purple-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Smarty":
                  return <span key={tech.tech} className="bg-amber-400 text-amber-100 dark:bg-amber-400 dark:text-black text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Supabase":
                  return <span key={tech.tech} className="bg-emerald-400 text-emerald-100 dark:bg-emerald-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "SQL_Server":
                  return <span key={tech.tech} className="bg-fuchsia-400 text-fuchsia-100 dark:bg-fuchsia-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                case "Swift3D":
                  return <span key={tech.tech} className="bg-lime-400 text-lime-100 dark:bg-lime-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
                default:
                  return <span key={tech.tech} className="bg-blue-400 text-blue-100 dark:bg-blue-400 dark:text-white text-xs font-medium mr-2 px-2.5 py-1 rounded-full ">{tech.tech}</span>;
              }
            })
        } 
        </div>       
      </div>
    </div>
  ))

  return (cards);
};


export default ProjectList;