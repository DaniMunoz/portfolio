import { useSelector } from 'react-redux';
import Link from "next/link";
//import styles from "../dist/output.css";
import ProjectList from "../projectList/projectList";
import projectsData from "../../public/json/projects.json";
import QualificationsList from "../qualificationsList/qualificationsList";
import qualificationsData from "../../public/json/qualifications.json";
import languageData from '../../public/json/languages.json' assert { type: 'JSON' };

export default function MainContent() {
  //To retrieve state:
  const showProjects = useSelector((state) => state.showProjects.showProjects);
  //Obtain current language from redux store
  const language = useSelector((state) => state.language.language);
  const languageStrings = languageData[0][language];

  return (
    <article className="rounded-full bg-gradient-to-br from-rose-100 via-slate-300 to-teal-100 md:w-2/3 lg:w-4/5 px-5 pt-20 min-h-[85vh] text-center scroll-auto">
      
      { showProjects && 
        <span className="text-3xl md:text-4xl p-10 text-rose-400 font-bold px-2.5 py-1 rounded-full">
          {languageStrings["mainContent.title.projects"]}</span>}
      { !showProjects && 
        <span className="text-3xl md:text-4xl p-10 text-teal-500 font-bold px-2.5 py-1 rounded-full">
          {languageStrings["mainContent.title.qualifications"]}</span>}

      <div className="flex flex-wrap justify-center py-10">
        { showProjects && <ProjectList projects={projectsData} />}
        { !showProjects && <QualificationsList qualifications={qualificationsData} />}
      </div>
    </article>
  );
}
