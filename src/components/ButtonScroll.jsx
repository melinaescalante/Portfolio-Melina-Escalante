
import { ChevronDown } from 'lucide-react';
const ScrollIndicator = () => {
  return (
    <div className="relative col-span-full left-1/2 top-5 -translate-x-1/2">
      <a 
        href="#experience" 
        className="group flex flex-col items-center gap-3 cursor-pointer z-100"
      >
  
        <span className="relative text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 group-hover:text-slate-900 transition-colors duration-300 overflow-hidden">
          <span className="relative z-10">Explore</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-black/10 to-transparent dark:from-transparent dark:via-white/20 dark:to-transparent"></span>
        </span>


        {/* Cápsula de Scroll */}
        <div className="relative w-[26px] h-[42px] border-2 border-gray-400 rounded-full group-hover:border-gray-400 transition-colors duration-500">
          {/* El punto animado */}
          <span className="absolute left-1/2 top-2 w-1 h-1 bg-blue-500 rounded-full animate-scroll-dot"></span>
        </div>

        {/* Doble Flecha con delay */}
        <div className="flex flex-col items-center -mt-1">
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 animate-arrow-fades" strokeWidth={1} />
          <ChevronDown className="w-4 h-4 -mt-2.5 text-gray-500 dark:text-gray-400 animate-arrow-fades [animation-delay:0.3s]" strokeWidth={1} />
        </div>
      </a>
    </div>
  );
};

export default ScrollIndicator;