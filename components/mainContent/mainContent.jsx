import Link from "next/link";
//import styles from "../dist/output.css";
import ProjectList from '../projectList/projectList';
import projectsData from '../../public/json/projects.json';

export default function MainContent() {
  return (
    <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
      <h1 className="text-2xl md:text-4xl">Main Content</h1>
      <div>
        <ProjectList projects={projectsData} />
    </div>
    </main>
  );
}
