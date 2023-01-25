import { useSelector } from 'react-redux';
import Link from "next/link";
//import styles from "../dist/output.css";
import ProjectList from "../projectList/projectList";
import projectsData from "../../public/json/projects.json";

export default function MainContent() {
  //To retrieve state:
  const showProjects = useSelector((state) => state.showProjects.showProjects);

  return (
    <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40 min-h-[85vh]">
      <h1 className="text-2xl md:text-4xl">Main Content</h1>
      <div className="flex flex-wrap justify-center">
        { showProjects && <ProjectList projects={projectsData} />}
      </div>
    </main>
  );
}
