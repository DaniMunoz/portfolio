const obtainProjects = async (req, res) => {
    try {
        const uri = process.env.AWS_PROJECTS_URI
        if (!process.env.AWS_PROJECTS_URI) {
            throw new Error('Invalid/Missing environment variable: "AWS_PROJECTS_URI"')
        }
        const response = await fetch(uri);
        const data = await response.json();
        res.json(data);
    } catch (e) {
        console.error(e);
    }
 };

export default obtainProjects;