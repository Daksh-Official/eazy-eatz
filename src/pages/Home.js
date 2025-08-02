import React from 'react';
import CarouselSection from '../components/Home/CarouselSection';
import Recommendations from '../components/Home/Recommendations';
import CategoryMenu from '../components/Home/CategoryMenu';
import RestaurantsNearby from '../components/Home/RestaurantsNearby';

const HomePage = () => {
  return (
    <>
      <CarouselSection />
      <Recommendations />
      <CategoryMenu />
      <RestaurantsNearby />
    </>
  );
};

export default HomePage;
