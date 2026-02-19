import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Title from "@/components/Title";
const ExperienceSection = () => {
  const jobs = [
    {
      position: "FrontEnd Developer",
      company: "Bisstrack Software",
      from: "May 2025",
      to: "Present",
      description: [
        "Modern SPAs: Developed dynamic features with Vue.js or Nuxt.js.",
        "UI/UX & Components: Built responsive interfaces using Vuetify and reusable components.",
        "APIs & Security: Integrated REST APIs and secure JWT authentication.",
        // "Scalability: Focused on scalable architecture and process automation.",
        "Agile: Collaborative version control using Git in Agile teams.",
      ],
    },
  ];

  return (
    <AnimatedContent>
      {/* Cambiamos a max-w-7xl para igualar tus otras secciones */}
      <section
        id="experience"
        className="max-w-7xl mx-auto py-24 px-6 md:px-12"
      >
        <Title title="Experience" />

        <div className="relative">
          {/* Línea de tiempo pegada a la izquierda para aprovechar el ancho 7xl */}
          <div className="absolute left-0 top-0 h-full w-px bg-gray-300"></div>

          <ul className="space-y-20">
            {jobs.map((job, index) => (
              <li key={index} className="relative pl-10">
                {/* Punto  sobre la línea */}
                <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full dark:bg-blue-300 bg-blue-400 z-10"></div>

                {/* Grid de 2 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Info Principal  */}
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white tracking-tight">
                      {job.position}
                    </h3>
                    <p className="text-base text-gray-500 dark:text-gray-300 mt-1">
                      {job.company}
                    </p>
                    <p className="text-xs mt-4 uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300 font-medium">
                      {job.from} — {job.to}
                    </p>
                  </div>

                  {/*  Detalles*/}
                  <div className="md:col-span-8">
                    

                    {/* Descripcion*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                      {job.description.map((item, i) => {
                     
                        const [title, text] = item.split(":");
                        return (
                          <div key={i} className="group">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold mb-1">
                              {title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-100 leading-snug group-hover:text-gray-800 transition-colors">
                              {text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AnimatedContent>
  );
};

export default ExperienceSection;
