import { AnimatePresence, motion } from 'framer-motion';
import LeftArrowSVG from '../svg/LeftArrow.svg';
import RightArrowSVG from '../svg/RightArrow.svg';
import useCarousel from './useCarousel';

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: '200%' },
};

const Carousel = ({ items = [], Component, cardHeight, cardWidth }) => {
  const [data, handleNext, handlePrevious] = useCarousel(items);
  console.log('render');
  return (
    <div className='overflow-hidden flex flex-row justify-between items-center h-[400px]'>
      <div onClick={handlePrevious} role='button'>
        <LeftArrowSVG />
      </div>
      <AnimatePresence>
        {data.map((item) => (
          <motion.figure
            initial='hidden'
            animate='visible'
            variants={variants}
            className={`mx-10 space-y-4 flex flex-col items-center`}
            style={{
              minHeight: `${cardHeight || 200}px`,
              minWidth: `${cardWidth || 150}px`,
            }}
            key={item._id}
            whileTap={{ scale: 0.8 }}
          >
            <Component
              item={item}
              height={cardHeight || 200}
              width={cardWidth || 150}
            />
          </motion.figure>
        ))}
      </AnimatePresence>
      <div onClick={handleNext} role='button'>
        <RightArrowSVG />
      </div>
    </div>
  );
};

export default Carousel;
