import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sections = ['Projects', 'Skills', 'About me']

    return (
        <nav className="fixed w-full flex justify-center items-center max-w-fit top-8 md:top-5  bg-[#ffffff03]    inset-x-0 mx-auto py-1  px-6 border rounded-full">
            <ul
                    className={` flex justify-center  `}
                >
                    {sections.map((section) => (
                        <li className="p-4 text-white md:hover:bg-transparent " key={section}><a href={`#${section}`} className="hover:text-sky-300 hover:transition-colors focus:ring-2  focus:ring-sky-300 focus:outline-none focus:rounded-sm   ">{section}</a></li>
                    ))}

                </ul>
     
        </nav>
    );
};

export default NavBar;