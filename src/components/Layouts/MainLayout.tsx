import React, { ReactNode } from 'react';
import DesktopPlaybackFooter from '../_mainLayout/DesktopPlaybackFooter';
import Header from '../_mainLayout/Header';
import LeftSidebar from '../_mainLayout/LeftSidebar';
import MobileMiniPlayer from '../_mainLayout/MobileMiniPlayer';
import MobileNavigationFooter from '../_mainLayout/MobileNavigationFooter';

const MainLayout = ({ children }: { children: ReactNode }) => {


  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Header */}
      <Header />

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden pt-16 pb-32 md:pb-20">
        {/* Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-b from-gray-900 to-black md:ml-64 overflow-y-auto relative">
          <div className="min-h-full p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>

      {/* Desktop Playback Footer */}
      <DesktopPlaybackFooter />

      {/* Mobile Mini Player */}
      <MobileMiniPlayer />

      {/* Mobile Navigation Footer */}
      <MobileNavigationFooter />

    </div>
  );
};

export default MainLayout;