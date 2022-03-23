import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../shared/svg/Books.svg';
import DashboardSVG from '../shared/svg/Dashboard.svg';
import MaterialSVG from '../shared/svg/Material.svg';
import RightSubArrowSvg from '../shared/svg/RightSubArrow.svg';
import './showcase.css';

const ShowcaseItem = ({ children, item }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      className='showcaseCard centerAll dark:bg-slate-800'
    >
      <Link
        className='space-y-4 2xl:space-y-6 flex flex-col centerAll'
        to={`/${item.toLowerCase()}`}
      >
        {children}
        <h1 className='text-gray-900 dark:text-white text-lg 2xl:text-2xl'>
          {item}
        </h1>
        <div className='showcaseArrow'>
          <RightSubArrowSvg />
        </div>
      </Link>
    </motion.div>
  );
};

const Showcase = () => {
  return (
    <section className='flex flex-col md:flex-row md:flex-wrap justify-center space-y-10 md:space-y-0 md:space-x-10'>
      <ShowcaseItem item='Dashboard'>
        <DashboardSVG />
      </ShowcaseItem>
      <ShowcaseItem item='Books'>
        <Books />
      </ShowcaseItem>
      <ShowcaseItem item='Materials'>
        <MaterialSVG />
      </ShowcaseItem>
    </section>
  );
};

export default Showcase;
