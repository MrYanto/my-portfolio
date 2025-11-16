import About from './home/partials/about';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
