import ThemeProvider from "./context/ThemeProvider";
import HomeSection from "./sections/HomeSection";
import "./App.css";
import SkillsSection from "./sections/SkillsSection";
import Footer from "./components/Footer";
import ProjectsSection from "./sections/ProjectsSection";
import AboutMeSection from "./sections/AboutMeSection";
function App() {
  return (
    <>
      <ThemeProvider>
        <div className=" text-black dark:text-white font-poppins bg-[#f7f4f4] dark:bg-[#121212]">
          {/* <input type="hidden" value=""></input> */}
          <HomeSection></HomeSection>
          <ProjectsSection></ProjectsSection>
          <SkillsSection></SkillsSection>
          <AboutMeSection></AboutMeSection>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
