import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProjectList from '../projectList/projectList';
import QualificationsList from "../qualificationsList/qualificationsList";
import languageData from '../../public/json/languages.json' assert { type: 'JSON' };
import dataLoader from '../../src/obtainDataFromBackend';
import PuffLoader from "react-spinners/PuffLoader";

const MainContent = ({ gradient, projectsData, qualificationsData }) => {
  const showProjects = useSelector((state) => state.showProjects.showProjects);
  
  const language = useSelector((state) => state.language.language);
  const languageStrings = languageData[0][language];

  const [projects, setProjects] = useState(projectsData);
  const [qualifications, setQualifications] = useState(qualificationsData);

  //Obtains data from the user's selected Data Source
  const backendRedux = useSelector((state) => state.backend.backend);

  let [loading, setLoading] = useState(false);
  

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await dataLoader.obtainData(backendRedux);
      setProjects(response.data.projects);
      setQualifications(response.data.qualifications);
      setLoading(false);
    }
    fetchData();
  }, [backendRedux, projectsData, qualificationsData]); 

  //<article className="rounded-full bg-gradient-to-br from-rose-100 via-slate-300 to-teal-100 md:w-2/3 lg:w-4/5 px-5 pt-20 min-h-[85vh] text-center scroll-auto">
  //<article className="rounded-full bg-gradient-to-br from-rose-100 via-slate-300 to-teal-100 md:w-2/3 lg:w-4/5 px-5 pt-20 min-h-[85vh] text-center scroll-auto"></article>
  //<article className={"bg-gradient-to-br " + gradient + " rounded-full md:w-2/3 lg:w-4/5 px-5 pt-20 min-h-[100vh] text-center scroll-auto"}>
  return (
    <article id="content" className={"bg-gradient-to-br " + gradient + " rounded-full md:w-2/3 lg:w-4/5 px-5 pt-20 min-h-[80vh] text-center scroll-auto"}>
      
      { showProjects && 
        <h1 className="text-3xl md:text-4xl p-10 text-white font-bold px-2.5 py-1 rounded-full">
          {languageStrings["mainContent.title.projects"]}</h1>}
      { !showProjects && 
        <h1 className="text-3xl md:text-4xl p-10 text-white font-bold px-2.5 py-1 rounded-full">
          {languageStrings["mainContent.title.qualifications"]}</h1>}

      <div className="flex flex-wrap justify-center py-16 sm:py-10">
        <PuffLoader className="mt-10"
          color={"white"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        { !loading && showProjects && <ProjectList projects={projects} />}
        { !loading && !showProjects && <QualificationsList qualifications={qualifications} />}
      </div>
    </article>
  );
}

export default MainContent;