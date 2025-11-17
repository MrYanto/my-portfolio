import About from './home/partials/about';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import TechStack from './home/partials/techStack';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />
        <About />
        <TechStack />
      </main>
    </>
  );
};

export default Home;
