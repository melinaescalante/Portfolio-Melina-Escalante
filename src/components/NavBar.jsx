import { useState, useEffect } from "react";
const NavBar = () => {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
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

  const sections = [
    { name: "Home", icon: "", id: "home" },
    { name: "Experience", icon: "", id: "experience" },
    {
      name: "Projects",
      icon: `<svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 .087.586l2.977-7.937A1 1 0 0 1 6 10h12V9a2 2 0 0 0-2-2h-4.532l-1.9-2.28A2 2 0 0 0 8.032 4H4Zm2.693 8H6.5l-3 8H18l3-8H6.693Z" clipRule="evenodd"/>
</svg>`,
      id: "projects",
    },
    { name: "Skills", icon: "", id: "skills" },
    { name: "About me", icon: "", id: "about-me" },
  ];

  return (
    <nav
      style={{ boxShadow: "0 12px 30px rgb(31 38 135 / 31%)" }}
      className="z-50 fixed w-full  shadow-blue-900 shadow-lg flex justify-center items-center max-w-fit top-8 md:top-5 bg-white dark:bg-[#121212]  inset-x-0 mx-auto py-0.5  px-6 border border-gray-600/50 rounded-full"
    >
      <ul className={` flex justify-center  `}>
        {sections.map((section) => (
          <li
            className="p-4  dark:text-white md:hover:bg-transparent "
            key={section.name}
          >
            <a
              href={`#${section.id}`}
           
              className={`
    ${active === section.id ? "text-blue-700" : "text-black dark:text-white"}
    hover:-translate-y-0.5
    duration-300
    hover:text-blue-700
    transition-all
    focus:outline-none
    focus:rounded-sm
    hidden md:block
  `}
            >
              <span
                className="block md:hidden w-6 h-6 text-white"
                dangerouslySetInnerHTML={{ __html: section.icon }}
              ></span>
              {section.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
