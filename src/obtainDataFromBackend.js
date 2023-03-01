/**
 * This file obtains data from the user's selected data source
 */
//TODO: Use Vercel's SWR: https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr
import projectsData from "../public/json/projects.json";
import qualificationsData from "../public/json/qualifications.json";

const helpers = function () {};

helpers.obtainData = async (backend) => {
    let responseProjects, dataProjects, projects, responseQualifications, dataQualifications, qualifications;
    switch (backend) {
        case 0:
            console.log('Local JSON files');
            return { data: {projects: projectsData, qualifications: qualificationsData}};
            break;
        case 1:
            console.log('MongoDB');
            responseProjects = await fetch('/api/mongodb-projects');
            dataProjects = await responseProjects.json();
            projects = JSON.parse(JSON.stringify(dataProjects));

            responseQualifications = await fetch('/api/mongodb-qualifications');
            dataQualifications = await responseQualifications.json();
            qualifications = JSON.parse(JSON.stringify(dataQualifications));

            return { data: {projects: projects, qualifications: qualifications}};
            break;
        case 2:
            console.log('AWS');
            responseProjects = await fetch('/api/aws-projects');
            dataProjects = await responseProjects.json();
            //order by project.id
            let orderedDataProjects = dataProjects.sort(function(a,b){
                return a.id - b.id;
            });
            projects = JSON.parse(JSON.stringify(orderedDataProjects));

            responseQualifications = await fetch('/api/aws-qualifications');
            dataQualifications = await responseQualifications.json();
            //order by qualification.id
            let orderedDataQualifications = dataQualifications.sort(function(a,b){
                return a.id - b.id;
            });
            qualifications = JSON.parse(JSON.stringify(orderedDataQualifications));
            
            return { data: {projects: projects, qualifications: qualifications}};
            break;
        case 3:
            console.log('Supabase PostgreSQL');
            responseProjects = await fetch('/api/prisma-supabase-projects');
            dataProjects = await responseProjects.json();
            //transforms technologies string '.NET,SQL_Server' into [{"tech": ".NET"}, {"tech": "SQL_Server"}]
            for (let [key, value] of dataProjects.entries()) {
                const myArray = value.technologies.split(",").map((x) => ({"tech": x}));
                value.technologies = myArray;
            }
            projects = JSON.parse(JSON.stringify(dataProjects));

            responseQualifications = await fetch('/api/prisma-supabase-qualifications');
            dataQualifications = await responseQualifications.json();
            qualifications = JSON.parse(JSON.stringify(dataQualifications));

            return { data: {projects: projects, qualifications: qualifications}};
            break;
        default:
            break;
        }    
}

export default helpers;
