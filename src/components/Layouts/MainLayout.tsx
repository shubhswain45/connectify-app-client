import React, { ReactNode, useEffect, useState } from 'react';
import DesktopPlaybackFooter from '../_mainLayout/DesktopPlaybackFooter';
import Header from '../_mainLayout/Header';
import LeftSidebar from '../_mainLayout/LeftSidebar';
import MobileMiniPlayer from '../_mainLayout/MobileMiniPlayer';
import MobileNavigationFooter from '../_mainLayout/MobileNavigationFooter';
import MobileMiniPlayerSkeleton from '../skeletons/MobileMiniPlayerSkeleton';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if window is defined (for SSR compatibility)
    if (typeof window !== 'undefined') {
      // Initial check
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768); // 768px is the default md breakpoint
        setTimeout(() => {setIsLoading(false)}, 1000)
      };

      checkMobile();

      // Add resize listener
      window.addEventListener('resize', checkMobile);

      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Header */}
      <Header />

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden pt-16 pb-32 md:pb-20">
        {/* Sidebar */}
        <LeftSidebar />

        {/* Main Content - Added border-l for the vertical line */}
        <main
          // className="flex-1 md:ml-64 overflow-y-auto relative md:border-l md:border-gray-700" 
          className="flex-1 md:ml-64 overflow-y-auto relative  md:border-l border-white  rounded-xl"
          style={{ background: `linear-gradient(to bottom, #7abcd6, #18181bcc, #121212)` }}
        >
          <div className="min-h-full p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>

      {/* Desktop Playback Footer */}
      <DesktopPlaybackFooter />

      {/* Mobile Mini Player */}
      {isMobile && <MobileMiniPlayer />}

      {
        isLoading &&
        <MobileMiniPlayerSkeleton/>
      }

      {/* Mobile Navigation Footer */}
      <MobileNavigationFooter />
    </div>
  );
};

export default MainLayout;