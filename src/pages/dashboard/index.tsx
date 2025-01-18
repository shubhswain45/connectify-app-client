import React from 'react';
import LikedTracksHeader from '@/components/_dashboard/LikedTracksHeader';
import Footer from '@/components/_dashboard/Footer';
import SectionGrid from '@/components/_dashboard/SectionGrid';
import { GetServerSideProps } from 'next';
import { createGraphqlClient } from '@/clients/api';
import { getFeedTracksQuery } from '@/graphql/queries/track';
import { Track } from '../../../gql/graphql';

interface HomePageProps {
  tracks: Track[]; // Properly typed
}

const HomePage: React.FC<HomePageProps> = ({ tracks }) => {
  return (
    <div className="space-y-6">
      {/* Header for user's liked tracks */}
      <LikedTracksHeader />

      {/* Grids for showing Tracks or playlists */}
      <SectionGrid title="Made for you" tracks={tracks} showTotalTracks={true} />
      {/* <SectionGrid title="Good Morning"  showTotalTracks={true} /> */}

      {/* Page footer */}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    // Create GraphQL client
    const graphqlClient = createGraphqlClient();

    // Execute GraphQL query
    const { getFeedTracks } = await graphqlClient.request(getFeedTracksQuery);

    // Return data as props
    return {
      props: {
        tracks: getFeedTracks,
      },
    };
  } catch (error) {
    console.error('Error fetching tracks:', error);

    // Fallback to empty data on error
    return {
      props: {
        tracks: [],
      },
    };
  }
};

export default HomePage;
