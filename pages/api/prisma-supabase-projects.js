import prisma from '../../lib/prisma';

async function insertInitialValues() {
    await prisma.project.createMany({
        data: [
          { id: 1, project_en: 'Personal Portfolio', project_es: 'Portafolio Personal', image: '/images/daniel-round-96.png', customer: 'This Website', customer_web: 'https://portfolio-danimunoz.vercel.app/', summary_en: 'To show my Full Stack Developer experience with different tech stacks, projects and companies. As well as my Academic achievements & Certifications', summary_es: 'Para mostrar mi experiencia <b>Full Stack Developer</b> con distintas tecnologías, proyectos y empresas. Así como mis logros académicos y certificaciones', technologies: 'React,NextJS,Supabase,Prisma,PostgreSQL', text_en: "<p>This website, created from scratch with::</p><ul className='bg-slate-300'><li>React, NextJS and TailwindCSS</li><li>TDD with Jest, React Testing Library and Cypress</li></ul><p>&nbsp;</p><p>Data (projects, titles, certifications...) is obtained from different backends, at user's choice (under development):</p><ul><li>NextJS: Local JSON files</li><li>MongoDB</li><li>AWS Lambda + DynamoDB</li><li>Google Firestore</li><li>NodeJS + PostgreSQL</li><li>Google Cloud: Java + Datastore</li></ul><p>&nbsp;</p><p>Available on <a href='https://github.com/DaniMunoz/portfolio' target='_blank' rel='noreferrer'>Github</a></p>", text_es: "<p>Esta Web, creada desde cero con:</p><ul className='bg-slate-300'><li>React, NextJS y TailwindCSS</li><li>TDD con Jest, React Testing Library y Cypress</li></ul><p>&nbsp;</p><p>Los datos (proyectos, títulos, certificaciones…) se obtienen de diversos backends, a elección del usuario (en desarrollo):</p><ul><li>NextJS: Ficheros JSON locales</li><li>MongoDB</li><li>AWS Lambda + DynamoDB</li><li>Google Firestore</li><li>NodeJS + PostgreSQL</li><li>Google Cloud: Java + Datastore</li></ul><p>&nbsp;</p><p>Disponible en <a href='https://github.com/DaniMunoz/portfolio' target='_blank' rel='noreferrer'>Github</a></p>"},
          { id: 2, project_en: 'Solidarity Android App & Cloud Backend', project_es: 'App Android Solidaria - Backend en la Nube', image: '/images/3warnings-96.png', customer: '3warnings', customer_web: 'https://www.3warnings.com/', summary_en: 'Solidarity Android app for instant messaging. With small ads, whose income is mainly destined to NGOs. End-to-end encryption, groups, etc.', summary_es: 'App Android solidaria de mensajería instantánea. Con anuncios pequeños, cuyos ingresos se destinan principalmente a ONGs. Encriptación, grupos, etc', technologies: 'Android,Java,Google_Cloud', text_en: "<img src='../../images/3warnings.png'/><p>&nbsp;</p><p>Free solidary messaging app</p><ul><li>Scalable - Cloud Backend</li><li>End to end encryption</li><li>Groups, photos, audio, emoji, gifs…</li></ul><p>&nbsp;</p><p>Created with:</p><ul><li>Android (Java)</li><li>Google Cloud</li><li>App Engine, Cloud Endpoints</li><li>Datastore, MemCache, TaskQueues</li><li>Firebase Cloud Messaging</li><li>Google Cloud Storage</li><li>and more...</li></ul><p>&nbsp;</p><p>Sole developer on the project</p><p>&nbsp;</p><p>Available <a href='https://3warnings.com/' target='_blank' rel='noreferrer'>here</a></p>", text_es: "<img src='../../images/3warnings.png'/><p>&nbsp;</p><p>App solidaria de mensajería instantánea</p><ul><li>Escalable - Backend en la nube</li><li>Encriptación extremo a extremo</li><li>Grupos, fotos, audio, emoticonos, gifs…</li></ul><p>&nbsp;</p><p>Creada con:</p><ul><li>Android (Java)</li><li>Google Cloud</li><li>App Engine, Cloud Endpoints</li><li>Datastore, MemCache, TaskQueues</li><li>Firebase Cloud Messaging</li><li>Google Cloud Storage</li><li>y más...</li></ul><p>&nbsp;</p><p>Único desarrollador en el proyecto</p><p>&nbsp;</p><p>Disponible <a href='https://3warnings.com/' target='_blank' rel='noreferrer'>aquí</a></p>"},
          { id: 3, project_en: 'Mobile Ads Platform', project_es: 'Plataforma Publicidad Móvil', image: '/images/3warnings1-96.png', customer: '3warnings', customer_web: 'https://3warnings.com/ads/profile.jsp', summary_en: 'Website to create ads and display them in the 3warnings app. Paypal integration, ads by countries and geographic areas, statistics, credits...', summary_es: 'Website para crear anuncios y mostrarlos en la app 3warnings. Integración con Paypal, anuncios por países y áreas geográficas, estadísticas, créditos...', technologies: 'Java,Google_Cloud,JS,IBM_Watson,Bootstrap', text_en: "<p>&nbsp;</p><img src='../../images/3warnings-ads.png'/><p>&nbsp;</p><p>Website to create ads and display them in the 3warnings app</p><ul><li>Paypal integration</li><li>Ad targeting by country and language</li><li>Ability to display ads only in certain geographic areas, such as cities or neighborhoods</li><li>Statistics: Ads printed, clicks, cost per click...</li></ul><p>&nbsp;</p><p>Developed with</p><ul><li>Google Cloud - Java</li><li>Cloud Endpoints, Datastore, Storage, TaskQueues...</li><li>JSP, BootStrap</li></ul><p>&nbsp;</p><p>Use of AI - IBM Watson:</p><ul><li>Ads Categorization, to show the user ads of his interest</li><li>Discarding of ads that do not comply with policies (sex, violence, hate, etc.).</li></ul><p>&nbsp;</p><p>Sole developer on the project</p><p>&nbsp;</p><p>Available <a href='https://3warnings.com/businesses.en.html' target='_blank' rel='noreferrer'>here</a> and <a href='https://3warnings.com/ads/profile.jsp' target='_blank' rel='noreferrer'>here</a></p>", text_es: "<p>&nbsp;</p><img src='../../images/3warnings-ads.png'/><p>&nbsp;</p><p>Website para crear anuncios y mostrarlos en la app 3warnings</p><ul><li>Integración con Paypal</li><li>Segmentación de anuncios por países e idiomas</li><li>Posibilidad de mostrar anuncios sólo en determinadas áreas geográficas, como ciudades o barrios</li><li>Estadísticas: Anuncios impresos, clicks, coste por click...</li></ul><p>&nbsp;</p><p>Desarrollado con</p><ul><li>Google Cloud - Java</li><li>Cloud Endpoints, Datastore, Storage, TaskQueues...</li><li>JSP, BootStrap</li></ul><p>&nbsp;</p><p>Uso de IA - IBM Watson:</p><ul><li>Categorización de anuncios, para mostrar al usuario anuncios de su interés</li><li>Descarte de anuncios que no cumplen políticas (sexo, violencia, odio...)</li></ul><p>&nbsp;</p><p>Único desarrollador en el proyecto</p><p>&nbsp;</p><p>Disponible <a href='https://3warnings.com/businesses.es.html' target='_blank' rel='noreferrer'>aquí</a> y <a href='https://3warnings.com/ads/profile.jsp' target='_blank' rel='noreferrer'>aquí</a></p>"},
          { id: 4, project_en: 'International School Intranet', project_es: 'Intranet de Colegio Internacional', image: '/images/aloha-96.png', customer: 'Aloha College Foundation', customer_web: 'https://www.aloha-college.com', summary_en: 'Development of Intranet and apps for school operations (reports, inventory, ticketing, workflows...), integrations with SIMS... ', summary_es: 'Desarrollo de Intranet y apps para el funcionamiento del colegio (informes, inventario, ticketing, workflows...), integraciones con SIMS...', technologies: '.NET,SQL_Server,DBNetSuite,JS,SIMS', text_en: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* Image does not belong to the project, but is similar</p><p>&nbsp;</p><p>Over five years developing the College Intranet and its applications, from scratch. Most of them using database information from <a href=\"https://www.ess-sims.co.uk/\"  target='_blank' rel='noreferrer'>SIMS</a> (School Information Management System), obtained through database server linking.</p><p>&nbsp;</p><ul><li>Ticketing System for IT and Maintenance Departments</li><li>Procurement Workflow between Professors, Department Heads, Administration and Management</li><li>Summer School Management: Activities, fees, charging up...</li><li>Pupils Reports Repository</li><li>Loan of educational books</li><li>Inventory control using barcoded labels</li><li>Uniform shop POS</li><li>Teaching Staff Evaluation</li><li>Pupils absences notifications to parents via email</li><li>Staff personal Ads</li><li>Facilities bookings</li><li>...</li></ul><p>&nbsp;</p><p>Sole developer on the project</p><p>&nbsp;</p><p>Requirements gathering with Department Heads, Administration and Management, time estimations, development and maintenance of Intranet and apps.</p>", text_es: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* La imagen no pertenece al proyecto, pero es aproximada</p><p>&nbsp;</p><p>Más de 5 años desarrollando la Intranet del Colegio y sus aplicaciones, desde cero. La mayoría de ellas, usando datos de <a href=\"https://www.ess-sims.co.uk/\"  target='_blank' rel='noreferrer'>SIMS</a> (School Information Management System), obtenida mediante enlazamiento de servidores de BBDD.</p><p>&nbsp;</p><ul><li>Sistema de Tickets para los Departamentos de IT y Mantenimiento</li><li>Workflow de Adquisiciones entre Profesores, Jefes de Departamento, Administración y Gerencia</li><li>Gestión Escuela de Verano: Actividades, cuotas, pagos...</li><li>Repositorio de informes de alumnos</li><li>Préstamo de libros de texto</li><li>Control de Inventario con códigos de barras</li><li>Punto de Venta de Uniformes</li><li>Evaluación de Docentes</li><li>Notificación de ausencias de alumnos a padres via email</li><li>Tablón de Anuncios para Empleados</li><li>Reserva de Instalaciones</li><li>...</li></ul><p>&nbsp;</p><p>Único desarrollador en el proyecto</p><p>&nbsp;</p><p>Toma de requisitos con Jefes de Departamento, Administración y Gerencia, estimación de tiempos, desarrollo y mantenimiento de Intranet y apps</p>"},
          { id: 5, project_en: 'Health Personnel Shifts & Payrolls', project_es: 'Turnos y Nóminas de Personal Sanitario', image: '/images/061-96.png', customer: 'EPES', customer_web: 'http://www.epes.es', summary_en: 'Significant annual saving compared to the previous system, as it accurately recorded the dedication of staff to different tasks.', summary_es: 'Supuso un importante ahorro anual respecto al anterior sistema, por registrar exactamente la dedicación del personal a distintas tareas', technologies: '.NET,SQL_Server,DBNetSuite,JS', text_en: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* Image does not belong to the project, but is similar</p><p>&nbsp;</p><p>For the Public Company of Health Emergencies of Andalusia (Spain) <a href='http://www.epes.es/' target='_blank' rel='noreferrer'>EPES</a></p><p>&nbsp;</p><p>Assignment of shifts for Health Emergency personnel, management of service coverage, hiring needs, data extraction for payroll calculation, analysis for decision-making...</p><p>&nbsp;</p><p>The previous system, based on <a href=\"https://www.cegid.com/en/human-resource-management/\" target=\"_blank\">Meta4</a> software, calculated payroll based on the daily dedication of personnel to different projects, but did not record dedication to different tasks on the same day, which was frequent, and with different costs. We developed a new system based on the hourly dedication of the staff. This solved the rounding of the previous system, which used to cause cost overruns and multiple problems in payroll.</p><p>&nbsp;</p><p>In a team of 4 people, I started as a programmer and became technical responsible for the project a year later.</p><p>&nbsp;</p><p>Requirements gathering and follow-up meetings with IT, Personnel and Financial Directors. Analysis, time estimation, development and evolutionary and corrective maintenance.", text_es: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* La imagen no pertenece al proyecto, pero es aproximada</p><p>&nbsp;</p><p>Para la Empresa Pública de Emergencias Sanitarias de Andalucía <a href='http://www.epes.es/' target='_blank' rel='noreferrer'>EPES</a></p><p>&nbsp;</p><p>Asignación de turnos para el personal de Emergencias Sanitarias, gestión de la cobertura de servicios, necesidades de contratación, extracción de datos para el cálculo de nóminas, análisis para la toma de decisiones...</p><p>&nbsp;</p><p>El sistema anterior, basado en el software <a href=\"https://www.cegid.com/ib/es/lp/meta4-es-ahora-cegid/\" target=\"_blank\">Meta4</a>, calculaba las nóminas en función de la dedicación diaria del personal a los diferentes proyectos, pero no registraba dedicación a distintas tareas un mismo día, que era frecuente, y con distintos costes. Desarrollamos un nuevo sistema basado en la dedicación horaria del personal. Esto solucionó los redondeos del sistema anterior, que solían provocar sobrecostes y múltiples problemas en la confección de nóminas.</p><p>&nbsp;</p><p>En un equipo de 4 personas, comencé como programador y me convertí en responsable técnico del proyecto un año después.</p><p>&nbsp;</p><p>Reuniones de toma de requisitos y seguimiento con Directores de IT, Personal y Financiero. Análisis, estimación de tiempos, desarrollo y mantenimiento evolutivo y correctivo.<p>&nbsp;</p>"},
          { id: 6, project_en: 'EPES Information System Maintenance', project_es: 'Sistema Información EPES', image: '/images/061-96.png', customer: 'EPES', customer_web: 'http://www.epes.es/', summary_en: 'Information System corrective, adaptive and evolutionary maintenance. User support, analysis, implementation and monitoring', summary_es: 'Mantenimiento correctivo, adaptativo y evolutivo del Sistema de Información. Atención al usuario, análisis, implantación y seguimiento', technologies: '.NET,SQL_Server,DBNetSuite,JS,Meta4', text_en: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* Image does not belong to the project, but is similar</p><p>&nbsp;</p><p>Software issues solving through a Ticketing System. Corrective, adaptive and evolutionary software maintenance. User support, analysis, time estimation, development, implementation and monitoring.</p><p>&nbsp;</p><p>Programmer in a team of 4 to 6 people</p>", text_es: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* La imagen no pertenece al proyecto, pero es aproximada</p><p>&nbsp;</p><p>Resolución de problemas de software mediante un Sistema de Tickets. Mantenimiento correctivo, adaptativo y evolutivo del software. Atención al usuario, análisis, estimación de tiempos, desarrollo, implantación y seguimiento.</p><p>&nbsp;</p><p>Programador en un equipo de 4 a 6 personas</p>"},
          { id: 7, project_en: 'Health Personnel Training', project_es: 'Formación para Sanitarios', image: '/images/iavante-96.png', customer: 'Iavante', customer_web: 'https://www.iavante.es/', summary_en: 'Courses and Accreditations Management for Healthcare professionals, who take them to gain competencies, required to advance in their careers', summary_es: 'Gestión de cursos y acreditaciones a profesionales sanitarios, con las que ganan competencias, requeridas para avanzar en sus carreras', technologies: '.NET,SQL_Server,DBNetSuite,JS', text_en: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* Image does not belong to the project, but is similar</p><p>&nbsp;</p><p>Iavante is part of the Ministry of Health of the Regional Government of Andalusia (Spain). It offers training and competency-based assessment for Healthcare professionals.</p><p>&nbsp;</p><p>They have an Advanced Clinical Simulation Center <a href='https://www.iavante.es/en#cmat' target='_blank' rel='noreferrer'>CMAT</a>, unique in Europe, with robotic simulation, virtual, scenic, videoanalysis, experimental surgery, etc.</p><p>&nbsp;</p><p>We developed its management software for courses, students, certifications, etc.</p><p>&nbsp;</p><p>I was a programmer in a team of 4 to 6 people.</p>", text_es: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* La imagen no pertenece al proyecto, pero es aproximada</p><p>&nbsp;</p><p>Iavante forma parte de la Consejería de Salud de la Junta de Andalucía. Ofrece formación y evaluación por competencias a profesionales de la salud.</p><p>&nbsp;</p><p>Tienen un Centro de Simulación Clínica Avanzada <a href='https://www.iavante.es/es#cmat' target='_blank' rel='noreferrer'>CMAT</a>, único en Europa, con simulación robótica, virtual, escénica, videoanálisis, cirugía experimental, etc</p><p>&nbsp;</p><p>Nosotros desarrollamos su software de gestión de cursos, alumnos, certificaciones, etc.</p><p>&nbsp;</p><p>Fui programador en un equipo de 4 a 6 personas</p>"},
          { id: 8, project_en: 'Project Management and Costs Control', project_es: 'Gestión de Proyectos y Costes', image: '/images/ptec-96.png', customer: 'PTec', customer_web: 'https://www.linkedin.com/company/ptec/', summary_en: "Management dashboard, showing the progress of all the company's projects: costs, hours invested, revenues, profits, etc", summary_es: 'Muestra el progreso de todos los proyectos de la empresa: costes, horas invertidas, ingresos, beneficios, etc', technologies: '.NET,SQL_Server,DBNetSuite,JS', text_en: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* Image does not belong to the project, but is similar</p><p>&nbsp;</p><p>This software summarizes all company projects revenues and costs, to easily track them</p><ul><li>each invoice is registered to its corresponding project</li><li>Staff register the working hours they spend in every project, every day.</li><li>Hourly costs are calculated for everyone.</li></ul><p>&nbsp;</p><p>This way you can see how the company is performing at any time, at global and project levels</p><p>&nbsp;</p><p>It contains a document repository for offers, bills and receptions, with automatic pdf generation and mailing between Commercial, Purchasing and Administration Departments.</p>", text_es: "<p>&nbsp;</p><img src='../../images/dbnetgrid.png'/><p style='color:LightBlue;'>* La imagen no pertenece al proyecto, pero es aproximada</p><p>&nbsp;</p><p>Este software resume todos los ingresos y costes de los proyectos de la empresa.</p><ul><li>se registra cada factura a cada proyecto</li><li>el personal imputa las horas de trabajo que dedica a cada proyecto, diariamente.</li><li>Los costes por hora se calculan para todos.</li></ul><p>&nbsp;</p><p>Así se puede comprobar en todo momento el progreso de la empresa, a nivel global y de proyectos.</p><p>&nbsp;</p><p>Contiene un repositorio de documentos para ofertas, facturas y recepciones, con generación automática de pdf y envío entre los Departamentos Comercial, Compras y Administración."},
          { id: 9, project_en: 'CMAT 3D Domotic UI Prototype', project_es: 'Prototipo Interfaz Domótica 3D', image: '/images/iavante-96.png', customer: 'Iavante', customer_web: 'https://www.iavante.es/en#cmat', summary_en: 'For CMAT Smart Building: 3D interface to access the controls of the different domotic elements installed in each zone', summary_es: 'Para el Edificio Inteligente CMAT: Interfaz 3D para acceder a los controles de los diferentes elementos domóticos instalados en cada zona', technologies: 'AutoCAD,Blender,Swift3D,Flash_MX', text_en: "<p>CMAT is a Smart Building used for training Healthcare personnel, simulating real scenarios through DaVinci robotic surgical system, simulators and others.</p><p>&nbsp;</p><p>The buildings lighting, air-conditioning, doors, security cameras, alarms and others are managed using an intuitive software.</p><p>&nbsp;</p><p>We developed a 3D User Interface prototype which represents the building and its different areas.</p><p>&nbsp;</p><p>The user selects a floor and an area to access to specific controls for the domotics items installed there.</p><p>&nbsp;</p><p>Team of 2 people, I was in charge of 3D modeling and animations.</p><p>&nbsp;</p><img src='../../images/CMAT-UI.png'/><p>&nbsp;</p>", text_es: "<p>CMAT es un Edificio Inteligente utilizado para la formación de personal sanitario, que simula escenarios reales mediante el sistema quirúrgico robótico DaVinci, simuladores y otros.</p><p>&nbsp;</p><p>La iluminación, el aire acondicionado, las puertas, las cámaras de seguridad, las alarmas y otros elementos del edificio se gestionan mediante un software intuitivo.</p><p>&nbsp;</p><p>Desarrollamos un prototipo de interfaz de usuario en 3D que representa el edificio y sus diferentes áreas. El usuario selecciona una planta y una zona para acceder a los controles específicos de los elementos domóticos allí instalados.</p><p>&nbsp;</p><p>Equipo de 2 personas, me encargué del modelado 3D y las animaciones.</p><p>&nbsp;</p><img src='../../images/CMAT-UI.png'/><p>&nbsp;</p>"},
          { id: 10, project_en: 'Hospital Website', project_es: 'Web de Hospital', image: '/images/hupm-96.png', customer: 'Hospital Puerta del Mar', customer_web: 'https://hospitalpuertadelmar.com/', summary_en: 'Previous website for this hospital in Cadiz (Spain). I was the technical responsible in a team of 4 people, and the contact with the hospital staff.', summary_es: 'Anterior sitio web para este hospital en Cádiz. Fui el responsable técnico en un equipo de 4 personas, y el contacto con el hospital.', technologies: 'PHP,Smarty,PostgreSQL', text_en: "<p>Previous website for the Puerta del Mar Hospital, in Cadiz</p><p>&nbsp;</p><p>Programmer in a team of 4 people, I ended up as technical responsible of the project and contact person with the hospital.</p>", text_es: "<p>Anterior sitio web para el Hospital Puerta del Mar, en Cádiz.</p><p>&nbsp;</p><p>Programador en un equipo de 4 personas, terminé como responsable técnico del proyecto y persona de contacto con el hospital</p>"},
        ],
        skipDuplicates: true, // Skip 'Bobo'
      })
}

const obtainProjects = async (req, res) => {
    try {
        const feed = await prisma.project.findMany({
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

export default obtainProjects;