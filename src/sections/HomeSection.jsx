import NavBar from "../components/NavBar";
import ButtonScroll from "../components/ButtonScroll";
import TextType from "../components/TextType";
import ButtonMode from "../components/ButtonMode";

const HomeSection = () => {
  return (
    <>
      <NavBar />
      <ButtonMode />
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-36 items-center max-w-7xl mx-auto min-h-screen  px-6 md:px-12"
      >
        {/* Lado Izquierdo: Contenido (7 de 12 columnas) */}
        <div className="md:col-span-7 flex flex-col gap-8">
          <div className="space-y-4">
            
            
            <h1 className="text-xl md:text-5xl font-light text-gray-900 dark:text-gray-300 leading-tight">
              <span className="text-4xl">I'm <span className="font-semibold text-black dark:text-white">Melina</span><br /></span>
              <span className="text-blue-600 font-bold italic">
                <TextType
                  text="FullStack Developer"
                  typingSpeed={60}
                  pauseDuration={3000}
                  deletingSpeed={30}
                  loop={true}
                />
              </span>
            </h1>
          </div>

          <div className="flex flex-col gap-4 max-w-lg ">
            <p className="text-md text-gray-700 dark:text-gray-200 leading-relaxed ">
              Passionate about creating <span className="font-medium">functional and intuitive</span> digital experiences.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-200 leading-relaxed">
              I design and develop custom solutions prioritizing accessibility and high-end aesthetics.
            </p>
          </div>

          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-300">
            <svg className="w-5 h-5 fill-current text-blue-500" viewBox="0 0 24 24">
               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-sm font-medium tracking-wide">Buenos Aires, Argentina.</span>
          </div>

          {/* Botones Estilizados */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="https://www.linkedin.com/in/melina-escalante-93b024291/" 
              target="_blank"
              className="px-8 py-4 dark:bg-gray-500/50 bg-gray-500 text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg dark:shadow-blue-100 dark:shadow-md dark:hover:bg-blue-900 shadow-blue-200"
            >
              Contact me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 border border-gray-300 text-gray-700 dark:text-gray-100 dark:hover:border-blue-400 dark:hover:text-blue-200 text-xs uppercase tracking-widest font-bold rounded-full hover:border-blue-200 hover:text-blue-500 transition-all duration-300"
            >
              See my work
            </a>
          </div>
        </div>

        {/* Lado Derecho: Imagen (5 de 12 columnas) */}
        <div className="md:col-span-5 flex justify-center md:justify-end relative">
          <div className="relative">
            {/* Elemento decorativo detrás */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-blue-50 rounded-[40px] -z-10"></div>
            
            <img
              src="/melina_escalante.jpg"
              alt="Melina Escalante"
              className="w-90 h-96 md:w-90 md:h-[480px] object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            />
         
          </div>
        </div>

        <ButtonScroll />
      </section>
    </>
  );
};

export default HomeSection;