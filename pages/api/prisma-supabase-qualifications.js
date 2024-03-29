import prisma from '../../lib/prisma';

async function insertInitialValues() {
    await prisma.qualification.createMany({
    data: [
        { id: 1, type: "degree", image: "/images/uah-128.png", link: "https://sede.educacion.gob.es/registrotitulos/mostrarAutorizacion.action?ticket=24bc19b432c7aa66770e9dca748dcb0d222f6fe8", institution_en: "UAH - Alcalá University (Spain)", institution_es: "UAH - Universidad de Alcalá", title_en: "M.Sc. Web Software Engineering", title_es: "Máster en Ingeniería del Software para la Web", text_en: "", text_es: ""},
        { id: 2, type: "degree", image: "/images/uma-128.png", link: "https://sede.educacion.gob.es/registrotitulos/mostrarAutorizacion.action?ticket=24bc19b432c7aa66770e9dca748dcb0d222f6fe8", institution_en: "UMA - Málaga University (Spain)", institution_es: "UMA - Universidad de Málaga", title_en: "Computer Science Degree", title_es: "Grado en Informática", text_en: "University degree with a focus on Information Systems and Software Engineering", text_es: ""},
        { id: 3, type: "certification", image: "/images/stanford-128.png", link: "https://www.coursera.org/account/accomplishments/verify/UKPST6XZNNGM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", institution_en: "Stanford University", institution_es: "Universidad de Stanford", title_en: "Machine Learning", title_es: "Machine Learning", text_en: "", text_es: ""},
        { id: 4, type: "certification", image: "/images/deeplearning-128.png", link: "https://www.coursera.org/account/accomplishments/specialization/6PRFUNZTS7HE", institution_en: "DeepLearning.AI", institution_es: "DeepLearning.AI", title_en: "Deep Learning Specialization", title_es: "Deep Learning Specialization", text_en: "<span>Artificial Intelligence Specialization, consisting of 5 courses:</span><span><ul><li><a href='https://www.coursera.org/account/accomplishments/certificate/6ZVEH9P8E8PW'>Neural Networks and Deep Learning</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/RTP348CSQ7X6'>Convolutional Neural Networks</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/5R64MNQVCPT5'>Structuring Machine Learning Projects</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/65U3GRHPH5MX'>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/H2JK724HKS4J'>Sequence Models</a></li></ul></span>", text_es: "<span>Especialización en Inteligencia Artificial, consistente en 5 cursos:</span><span><ul><li><a href='https://www.coursera.org/account/accomplishments/certificate/6ZVEH9P8E8PW'>Neural Networks and Deep Learning</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/RTP348CSQ7X6'>Convolutional Neural Networks</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/5R64MNQVCPT5'>Structuring Machine Learning Projects</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/65U3GRHPH5MX'>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/H2JK724HKS4J'>Sequence Models</a></li></ul></span>"},
        { id: 5, type: "certification", image: "/images/google-cloud-128.png", link: "https://www.coursera.org/account/accomplishments/specialization/CS7DX6HYLX9X", institution_en: "Google Cloud Platform", institution_es: "Google Cloud Platform", title_en: "Data Engineering, Big Data & Machine Learning on GCP", title_es: "Data Engineering, Big Data & Machine Learning on GCP", text_en: "<span>Google Specialization, consisting of 5 courses:</span><span><ul><li><a href='https://www.coursera.org/account/accomplishments/certificate/UXXX2TQ88698'>Building Resilient Streaming Systems on Google Cloud Platform</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/4AZYJPR35Z6G'>Google Cloud Big Data and Machine Learning Fundamentals</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/XF6Z2JE7HY7P'>Serverless Data Analysis with Google BigQuery and Cloud Dataflow</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/CNNQXPKBLHEW'>Serverless Machine Learning with Tensorflow on Google Cloud Platform</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/RTXYB25FCNX5'>Leveraging Unstructured Data with Cloud Dataproc on Google Cloud Platform</a></li></ul></span>", text_es: "<span>Especialización de Google, consistente en 5 cursos:</span><span><ul><li><a href='https://www.coursera.org/account/accomplishments/certificate/UXXX2TQ88698'>Building Resilient Streaming Systems on Google Cloud Platform</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/4AZYJPR35Z6G'>Google Cloud Big Data and Machine Learning Fundamentals</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/XF6Z2JE7HY7P'>Serverless Data Analysis with Google BigQuery and Cloud Dataflow</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/CNNQXPKBLHEW'>Serverless Machine Learning with Tensorflow on Google Cloud Platform</a></li><li><a href='https://www.coursera.org/account/accomplishments/certificate/RTXYB25FCNX5'>Leveraging Unstructured Data with Cloud Dataproc on Google Cloud Platform</a></li></ul></span>"},
        { id: 6, type: "certification", image: "/images/microsoft-128.png", link: "https://learn.microsoft.com/en-us/users/danielmuoz-9291/transcript/dzq6pso80n9pm2z", institution_en: "Microsoft", institution_es: "Microsoft", title_en: "MCPD Web Developer", title_es: "MCPD Web Developer", text_en: "", text_es: ""},
        { id: 7, type: "certification", image: "/images/microsoft-128.png", link: "https://learn.microsoft.com/en-us/users/danielmuoz-9291/transcript/dzq6pso80n9pm2z", institution_en: "Microsoft", institution_es: "Microsoft", title_en: "MCTS .Net Framework 2.0, Web Applications", title_es: "MCTS .Net Framework 2.0, Web Applications", text_en: "", text_es: ""},
        { id: 8, type: "certification", image: "/images/mongodb-128.png", link: "https://learn.mongodb.com/c/cuXBsBhFTo-CJoqI-At-hQ", institution_en: "MongoDB", institution_es: "MongoDB", title_en: "M001: MongoDB Basics", title_es: "M001: MongoDB Basics", text_en: "", text_es: ""}
    ],
    skipDuplicates: true, // Skip 'Bobo'
    })
}

const obtainQualifications = async (req, res) => {
    try {
        const feed = await prisma.qualification.findMany({
            orderBy: [
                {
                  id: 'asc',
                }
            ]
        });
        
        if (feed.length == 0){
            await insertInitialValues();
        }
        
        res.json(feed);
    } catch (e) {
        console.error(e);
    }
};

export default obtainQualifications;