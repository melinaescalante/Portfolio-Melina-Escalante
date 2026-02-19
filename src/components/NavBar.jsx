import { useState, useEffect } from "react";
const NavBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Ajustamos a 100 para una detección más natural
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sections = [
    { name: "Home", id: "home" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about-me" },
  ];

  return (
    <nav className="fixed z-100 top-6 inset-x-0 mx-auto max-w-fit transition-all duration-300">
      <ul className="flex items-center gap-1 px-3 py-2 bg-white/70 dark:bg-black/70 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl shadow-black/5 rounded-full">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`
                px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300
                ${active === section.id 
                  ? "text-blue-600 bg-blue-50/50 dark:bg-blue-900/20" 
                  : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"}
              `}
            >
              {section.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
