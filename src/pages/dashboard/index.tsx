import React from 'react';
import LikedTracksHeader from '@/components/_dashboard/LikedTracksHeader';
import SectionGrid from '@/components/_dashboard/SectionGrid';
import Footer from '@/components/_dashboard/Footer';

const HomePage: React.FC = () => {

  return (
    <div className="space-y-6">
      {/* Header for user's liked tracks */}
      <LikedTracksHeader />

      {/* Grids for showing Tracks or playlists */}
      <SectionGrid title='Made for you' showTotalTracks={false} />
      <SectionGrid title='Good Morning' showTotalTracks={false} />

      {/* Page footer */}
      <Footer />
    </div>
  );
};

export default HomePage;