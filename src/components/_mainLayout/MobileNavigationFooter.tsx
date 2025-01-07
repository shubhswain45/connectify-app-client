import React, { useState } from 'react';
import SvgIcon from '../../../public/svgs/SvgIcon';
import { LibraryMenu } from './LibraryMenu';
import Link from 'next/link';




function MobileNavigationFooter() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  return (
    <>
      <LibraryMenu
        isOpen={isLibraryOpen} 
        onClose={() => setIsLibraryOpen(false)} 
      />
      
      <nav className="md:hidden h-16 bg-[#000000] fixed bottom-0 left-0 right-0 z-30">
        <div className="flex h-full items-center justify-around px-4">
          <Link href="/" className="flex flex-col items-center text-gray-400 hover:text-white">
            <SvgIcon name='Home' />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/Explore" className="flex flex-col items-center text-gray-400 hover:text-white">
            <SvgIcon name='Explore' />
            <span className="text-xs mt-1">Explore</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center text-gray-400 hover:text-white">
            <SvgIcon name='Search' />
            <span className="text-xs mt-1">Search</span>
          </Link>
          <button 
            onClick={() => setIsLibraryOpen(true)}
            className="flex flex-col items-center text-gray-400 hover:text-white"
          >
            <SvgIcon name='Library' />
            <span className="text-xs mt-1">Library</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default MobileNavigationFooter;