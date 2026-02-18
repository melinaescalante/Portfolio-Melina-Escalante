import Title from "@/components/Title";

const AboutMeSection = () => {
  const socialMedia = [
    {
      image: `<svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>`,
      url: "https://www.linkedin.com/in/melina-escalante-93b024291/",
      name: "LinkedIn",
    },
    {
      image: `<svg class="w-6 h-6  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                    </svg>`,
      url: "https://github.com/melinaescalante",
      name: "Github",
    },
    {
      image: `<svg class="w-6 h-6 " fill="currentColor"  viewBox="0 0 50 50" ><path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"/></svg>`,
      name: "Gmail",
    },
  ];
  return (
    <section id="about-me" className="max-w-7xl mx-auto py-32 px-6">
      <Title title="About me" />

      <div className="grid md:grid-cols-12 grid-cols-1 gap-12 items-center">
        {/* Imagen */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 border border-gray-100 rounded-2xl -z-10 group-hover:border-blue-50 transition-colors duration-500"></div>

            <img
              src="/melina_escalante_2.JPG"
              className="h-[450px] w-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-sm"
              alt="Melina Escalante"
            />
          </div>
        </div>

        {/* Información  */}
        <div className="md:col-span-7 flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-gray-700 dark:text-gray-200 text-md leading-relaxed font-light max-w-2xl">
            <p>
              My name is{" "}
              <span className="text-gray-900 dark:text-gray-200 font-semibold">
                Melina Escalante
              </span>
              . My journey began in 2020, graduating from high school with a{" "}
              <span className="text-gray-900 dark:text-gray-200 font-semibold">
                Bachelor's degree in Computer Science
              </span>
              .
            </p>

            <p>
              In February 2025, I earned my degree as a{" "}
              <span className="text-gray-900 dark:text-gray-200 font-semibold">
                Full Stack Developer
              </span>
              . Currently, I am continue expanding my professional foundation by
              pursuing a{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Bachelor’s degree in Systems
              </span>{" "}
              since August 2025.
            </p>

            <p>
              I am an ambitious and optimistic person, passionate about constant
              learning. My goal is to combine my academic background with my
              technical skills to offer{" "}
              <span className="text-gray-900 dark:text-gray-200 font-semibold">
                efficient and customized solutions
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col items-start gap-8 mt-4">
      
            <span
              className="inline-block text-xs uppercase tracking-[0.3em] font-bold text-blue-500 dark:text-blue-400 pb-2 "
            >
              Let's build something together
            </span>

            {/* Los iconos de redes sociales  */}
            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    social.name === "Gmail"
                      ? "mailto:meliescalantee@gmail.com"
                      : social.url
                  }
                  className="py-3 px-3 mx-auto my-auto text-gray-400 dark:text-blue-300 dark:hover:bg-blue-100/20 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-all duration-300"
                >
                  <span
                  
                    dangerouslySetInnerHTML={{ __html: social.image }}
                  />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
