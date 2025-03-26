import { useState } from 'react'
import HomeSection from './sections/HomeSection'
import './App.css'
import SkillsSection from './sections/SkillsSection'
import Footer from './components/Footer'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import AboutMeSection from './sections/AboutMeSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <HomeSection></HomeSection>
  <ProjectsSection></ProjectsSection>
   <SkillsSection></SkillsSection>
   <AboutMeSection></AboutMeSection>
   <Footer></Footer>
      </>
  )
}

export default App
