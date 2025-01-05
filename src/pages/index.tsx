import LikedTracksHeader from '@/components/_home/LikedTracksHeader';
import SectionGrid from '@/components/_home/SectionGrid';
import SectionCard from '@/components/_home/SectionCard';
import Footer from '@/components/_home/Footer';

interface PlaylistCard {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

// Mock data
const makeForYouItems: PlaylistCard[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Daily Mix ${i + 1}`,
  description: 'Custom playlist for you'
}));

const recentlyPlayedItems: PlaylistCard[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Album Title ${i + 1}`,
  description: 'Artist Name'
}));

const topMixesItems: PlaylistCard[] = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  title: `Mix ${i + 1}`,
  description: 'Based on your listening'
}));

const HomePage: React.FC = () => {


  return (
    <div className="space-y-6">
      {/* Liked Track Header */}
      <LikedTracksHeader />

      {/* Made For You Section with Horizontal Scroll */}
      <SectionGrid title='Made for you' />

      <SectionGrid title='Good Morning' />

      <Footer/>


      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default HomePage;