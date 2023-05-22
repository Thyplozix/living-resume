// Sections
import About from './sections/about';
import HomeSection from './sections/home';
import Services from './sections/services';
import Skills from './sections/skills';

// -------------------

function Home() {
  return (
    <>
      <HomeSection />
      <Services />
      <About />
      <Skills />
    </>
  );
}

export default Home;
