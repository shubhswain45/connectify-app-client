import React from 'react';
import LikedTracksHeader from '@/components/_dashboard/LikedTracksHeader';
import SectionGrid from '@/components/_dashboard/SectionGrid';
import Footer from '@/components/_dashboard/Footer';

const HomePage: React.FC = () => {

  return (
    <div className="space-y-6">

      {/* Liked Track Header */}
      <LikedTracksHeader />

      {/* Made For You Section with Horizontal Scroll */}
      <SectionGrid title='Made for you' showTotalTracks={false} />

      <SectionGrid title='Good Morning' showTotalTracks={false} />

      <Footer />
    </div>
  );
};

export default HomePage;