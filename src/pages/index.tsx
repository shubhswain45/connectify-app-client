import LikedTracksHeader from '@/components/_home/LikedTracksHeader';
import SectionGrid from '@/components/_home/SectionGrid';
import Footer from '@/components/_home/Footer';

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