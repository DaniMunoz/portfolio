/**
 * This file obtains data from the user's selected data source
 */
import projectsData from "../public/json/projects.json";
import qualificationsData from "../public/json/qualifications.json";

const helpers = function () {};

helpers.obtainData = async (backend) => {
    switch (backend) {
        case 0:
            console.log('Local JSON files');
            return { data: {projects: projectsData, qualifications: qualificationsData}};
            break;
        case 1:
            console.log('MongoDB');
            const responseProjects = await fetch('/api/mongodb-projects');
            const dataProjects = await responseProjects.json();
            const projects = JSON.parse(JSON.stringify(dataProjects));

            const responseQualifications = await fetch('/api/mongodb-qualifications');
            const dataQualifications = await responseQualifications.json();
            const qualifications = JSON.parse(JSON.stringify(dataQualifications));

            return { data: {projects: projects, qualifications: qualifications}};
            break;
        case 2:
            break;
        default:
            break;
        }    
}

export default helpers;
