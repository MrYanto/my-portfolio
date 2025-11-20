import React from 'react';
import PortfolioCard from '../../../components/portfolio-card';

const Portfolio = () => {
  return (
    <section className='custom-container flex flex-col gap-12' id='projects'>
      <div className='mx-2 flex flex-col gap-2 lg:gap-4'>
        <h2 className='text-display-md lg:text-display-2xl text-center font-bold'>
          Bridging Design and Development
        </h2>
        <p className='md:text-md text-center text-sm text-neutral-400'>
          These are real projects where I implemented frontend interfaces with
          precision and attention to detail.
        </p>
      </div>

      <div className='flex flex-col gap-5 lg:mx-[20.5px] lg:flex-row'>
        <PortfolioCard
          num={1}
          year={2025}
          image='/images/port1.png'
          alt='First portfolio'
        />
        <PortfolioCard
          num={2}
          year={2025}
          image='/images/port2.png'
          alt='Second Portfolio'
        />
        <PortfolioCard
          num={3}
          year={2025}
          image='/images/port3.png'
          alt='Third Portfolio'
        />
      </div>
    </section>
  );
};

export default Portfolio;
