import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sections = ['About me', 'Skills', 'Projects', 'Contact']

    return (
        <nav className="relative text-end p-4 z-0">
            {/* Botón de menú */}
            <button
                className="  focus:outline-none md:hidden z-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Icono hamburguesa */}
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                    />
                </svg>
            </button>
            <div className="grid grid-cols-2">
                <div>

                    <p className="p-4 top-1 absolute  md:left-0 md:block">Melina Escalante</p>
                </div>

                <ul
                    className={`absolute z-0 text-end items-center justify-end top-full left-0 w-full  font-medium transform transition-transform duration-500 ease-in-out md:static md:flex md:translate-y-0 md:space-x-4 md:bg-transparent ${isOpen ? "translate-y-[0] -z-100" : "-translate-y-[150%] -z-100"
                        }`}
                >
                    {sections.map((section) => (
                        <li className="p-4 text-white md:hover:bg-transparent " key={section}><a href={`#${section}`} className="hover:text-sky-300 hover:transition-colors">{section}</a></li>
                    ))}


                </ul>
            </div>
        </nav>
    );
};

export default NavBar;