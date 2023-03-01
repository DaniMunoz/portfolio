import clientPromise from "../../lib/mongodb";

const obtainQualifications = async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("curriculum_vitae");

       const projects = await db
           .collection("qualifications")
           .find({})
           .sort({ id: 1 })
           .limit(20)
           .toArray();

       res.json(projects);
   } catch (e) {
       console.error(e);
   }
};

export default obtainQualifications;