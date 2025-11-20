import About from './home/partials/about';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import TechStack from './home/partials/techStack';
import Skill from './home/partials/skill';
import Portfolio from './home/partials/portfolio';
import TechJourney from './home/partials/techJourney';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />
        <About />
        <TechStack />
        <Skill />
        <Portfolio />
        <TechJourney />
      </main>
    </>
  );
};

export default Home;
