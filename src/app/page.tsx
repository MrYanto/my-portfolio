import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='custom-container'>
        {/* Hero Section */}
        <Hero />
      </main>
    </>
  );
};

export default Home;
