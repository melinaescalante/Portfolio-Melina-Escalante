import { useState, useEffect } from "react";
import ButtonMode from "./ButtonMode";
const NavBar = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear el scroll del cuerpo cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const sections = [
    { name: "Home", id: "home" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about-me" },
  ];

  return (
  <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-90 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav className={`fixed z-100 transition-all duration-500 inset-x-0 mx-auto ${isScrolled || isOpen ? "top-3 max-w-[95%] md:max-w-7xl px-4" : "top-0 max-w-full px-0"}`}>
        <div className={`mx-auto transition-all duration-300 ${isScrolled || isOpen ? "bg-white/70  dark:bg-black/80 backdrop-blur-xl  shadow-2xl rounded-[2.5rem]" : "bg-transparent"}`}>
          
          {/* Contenedor principal */}
          <div className="flex items-center justify-between px-6 py-2.5">
            
            {/*Logo */}
            <div className="flex-1">
              <span className="font-bold tracking-tighter text-xl dark:text-white cursor-default">
                ME<span className="text-blue-600">.</span>
              </span>
            </div>

            {/* Menu en desktop */}
            <div className="hidden md:block">
              <ul className="flex items-center justify-center gap-1 bg-gray-100/50 dark:bg-white/5 px-1.5 p-1 rounded-full border border-gray-300 dark:border-white/5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`px-4 py-2 block rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                        active === section.id 
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800 shadow-sm" 
                          : "text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-white"
                      }`}
                    >
                      {section.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu hamburguesa */}
            <div className="flex-1 flex justify-end items-center gap-4">
              <ButtonMode />
              
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600 dark:text-gray-300">
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>

          </div>

          {/* Links en movil */}
          <div className={`md:hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
            <ul className="flex flex-col p-6 gap-4 items-center">
              {sections.map((section) => (
                <li key={section.id} className="w-full">
                  <a 
                    href={`#${section.id}`} 
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-center text-xs uppercase tracking-[0.3em] font-bold transition-all ${
                      active === section.id ? "text-blue-600 scale-110" : "text-gray-500"
                    }`}
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;