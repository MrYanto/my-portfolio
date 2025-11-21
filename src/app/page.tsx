import About from './home/partials/about';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import TechStack from './home/partials/techStack';
import Skill from './home/partials/skill';
import Portfolio from './home/partials/portfolio';
import TechJourney from './home/partials/techJourney';
import Testimonial from './home/partials/testimonial';
import FAQ from './home/partials/FAQ';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='overflow-hidden'>
        {/* Hero Section */}
        <Hero />
        <About />
        <TechStack />
        <Skill />
        <Portfolio />
        <TechJourney />
        <Testimonial />
        <FAQ />
      </main>
    </>
  );
};

export default Home;
