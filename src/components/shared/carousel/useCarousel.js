import { useEffect, useState } from 'react';

const getMaxItem = (innerWidth, customBreakPoints) => {
  const width = innerWidth || window.innerWidth;
  return customBreakPoints.find((point) => width <= point.width)?.slides || 4;
};

const breakpointsData = [
  {
    width: 767,
    slides: 1,
  },
  {
    width: 850,
    slides: 2,
  },
  {
    width: 1024,
    slides: 3,
  },
];

const useCarousel = (items, breakpoints = breakpointsData) => {
  const [pageData, setPageData] = useState({
    maxItem: 0,
    data: [],
    page: 0,
  });

  const { maxItem, data, page } = pageData;

  useEffect(() => {
    const max = getMaxItem(0, breakpoints);
    setPageData((prevData) => ({
      ...prevData,
      maxItem: max,
      data: items.slice(0, max),
    }));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleMaxItem = (e) => {
      const width = e.target.innerWidth;
      const max = getMaxItem(width, breakpoints);
      setPageData((prevData) => ({
        ...prevData,
        maxItem: max,
        data: items.slice(0, max),
        page: 0,
      }));
    };

    window.addEventListener('resize', handleMaxItem);

    return () => window.removeEventListener('resize', handleMaxItem);
    // eslint-disable-next-line
  }, []);

  const handleNext = () => {
    if (!items[(page + 1) * maxItem]) {
      const visibleData = items.slice(0, maxItem);
      setPageData((prevData) => ({
        ...prevData,
        data: visibleData,
        page: 0,
      }));
      return;
    }
    const visibleItem = items.slice(
      (page + 1) * maxItem,
      (page + 1) * maxItem + maxItem
    );
    setPageData((prevData) => ({
      ...prevData,
      data: visibleItem,
      page: prevData.page + 1,
    }));
  };

  const handlePrevious = () => {
    if (!page) return;
    const visibleItem = items.slice(
      (page - 1) * maxItem,
      (page - 1) * maxItem + maxItem
    );
    setPageData((prevData) => ({
      ...prevData,
      data: visibleItem,
      page: prevData.page - 1,
    }));
  };

  return [data, handleNext, handlePrevious];
};

export default useCarousel;
