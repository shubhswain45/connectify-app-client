import React from 'react';
import LikedTracksHeader from '@/components/_dashboard/LikedTracksHeader';
import Footer from '@/components/_dashboard/Footer';
import MediaTabs from '@/components/_dashboard/_explore/MediaTabs';
import ArtistsSection from '@/components/_dashboard/_explore/ArtistsSection';

const ExplorePlaylistsPage = () => {



  return (
    <div className="">
      {/* Tabs for switching between Tracks and Playlists */}
      <MediaTabs />

      {/* Header for user's liked tracks */}
      <LikedTracksHeader />

      {/* Artists Section */}
      <ArtistsSection />

      {/* Grids for showing Tracks or playlists */}
      {/* <SectionGrid title='Popular playlists' showTotalTracks={true} /> */}

      {/* Page footer */}
      <Footer />
    </div>
  );
};

export default ExplorePlaylistsPage;