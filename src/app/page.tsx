import About from './home/partials/about';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import TechStack from './home/partials/techStack';
import Skill from './home/partials/skill';

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
      </main>
    </>
  );
};

export default Home;
