const ExperienceSection = () => {
  const jobs = [
    {
      position: "FrontEnd Developer",
      company: "Bisstrack Software",
      from: "May 2025",
      to: "present",
      description: "lorem ipsum",
    },
  ];
  return (
    <section id="experience" className="max-w-screen-lg mx-auto my-28">
      <h2 className="text-4xl text-start md:text-center font-medium mb-8 ms-4 ">
        Experience
      </h2>
      <div className="relative px-2 mx-2 z-0">
        <ul className="border-l-1 border-blue-950 ">
          {jobs.map((job) => (
            <li className="mb-8 md:mb-6 ml-8 " key={job.position}>
              <span className="  absolute flex items-center justify-center w-5.5 h-6 bg-white rounded-full -left-0.5 ring-5 ring-blue-400 dark:ring-dark-950 dark:bg-dark-600">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-primary-100 dark:text-primary-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <p>
                <span className="font-medium">{job.position}</span> -{" "}
                <span className="font-light">{job.company}</span>
                <p className="font-light"  >
                  {job.from} - {job.to}
                </p>
                <p>
                 Development of new views and features for Single Page Applications using Vue.js and Nuxt.js, with Vuetify for UI components. Focus on reusable components and a scalable architecture, integration with REST APIs for data consumption and process automation, implementation of JWT-based authentication, and collaborative work using Git in agile environments.
                </p>
              </p>
            </li>
            //   <CardComponent key={project.title} obj={project}></CardComponent>
          ))}
        </ul>{" "}
      </div>
    </section>
  );
};
export default ExperienceSection;
