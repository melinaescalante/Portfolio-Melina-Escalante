import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ButtonMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      
      className="group relative flex items-center justify-center p-2 rounded-full 
                 bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 
                 hover:border-blue-500/50 dark:hover:border-blue-400/50
                 transition-all duration-300 cursor-pointer active:scale-90"
    >
      {/* El div de fondo que brilla al hacer hover */}
      <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300" />

      {theme === "light" ? (
        <svg
          className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-yellow-300 group-hover:text-yellow-200 transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" />
        </svg>
      )}
    </button>
  );
};

export default ButtonMode;