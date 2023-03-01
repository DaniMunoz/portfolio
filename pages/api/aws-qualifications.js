const obtainQualifications = async (req, res) => {
    try {
        const uri = process.env.AWS_QUALIFICATIONS_URI
        if (!process.env.AWS_QUALIFICATIONS_URI) {
            throw new Error('Invalid/Missing environment variable: "AWS_QUALIFICATIONS_URI"')
        }
        const response = await fetch(uri);
        const data = await response.json();
        res.json(data);
    } catch (e) {
        console.error(e);
    }
};

export default obtainQualifications;