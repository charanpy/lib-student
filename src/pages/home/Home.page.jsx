import React, { lazy, Suspense } from "react";
import Banner from "../../components/banner/Banner.component";
import Loader from "../../components/shared/loader/Loader.component";
import TestimonialComponent from "../../components/testimonial/Testimonial.component";

const Showcase = lazy(() =>
  import("../../components/showcase/Showcase.component")
);
const RecentBooks = lazy(() =>
  import("../../components/recent-books/RecentBooks.component")
);

const Home = () => {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loader />}>
        <div className="px-5 md:px-20">
          <Showcase />
          <RecentBooks />
          <TestimonialComponent />
        </div>
      </Suspense>
    </>
  );
};

export default Home;
