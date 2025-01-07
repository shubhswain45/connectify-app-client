import React from 'react';
import LikedTracksHeader from '@/components/_dashboard/LikedTracksHeader';
import SectionGrid from '@/components/_dashboard/SectionGrid';
import Footer from '@/components/_dashboard/Footer';
import ShowBanner from '@/components/_dashboard/ShowBanner';

const HomePage: React.FC = () => {

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <ShowBanner />

      {/* Liked Track Header */}
      <LikedTracksHeader />

      {/* Made For You Section with Horizontal Scroll */}
      <SectionGrid title='Made for you' />

      <SectionGrid title='Good Morning' />

      <Footer />
    </div>
  );
};

export default HomePage;