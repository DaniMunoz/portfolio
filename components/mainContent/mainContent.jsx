import { useSelector } from 'react-redux';
import Link from "next/link";
//import styles from "../dist/output.css";
import ProjectList from "../projectList/projectList";
import projectsData from "../../public/json/projects.json";
import languageData from '../../public/json/languages.json' assert { type: 'JSON' };

export default function MainContent() {
  //To retrieve state:
  const showProjects = useSelector((state) => state.showProjects.showProjects);
  //Obtain current language from redux store
  const language = useSelector((state) => state.language.language);
  const languageStrings = languageData[0][language];

  return (
    <article className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 min-h-[85vh] text-center">
      <h1 className="text-2xl md:text-4xl p-10">
        { showProjects && languageStrings["mainContent.title.projects"]}
        { !showProjects && languageStrings["mainContent.title.qualifications"]}
      </h1>
      <div className="flex flex-wrap justify-center">
        { showProjects && <ProjectList projects={projectsData} />}
      </div>
    </article>
  );
}
