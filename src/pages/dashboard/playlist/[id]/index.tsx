import React, { useState, useEffect } from 'react';
import { Play, MoreHorizontal, Share2, Download, Heart } from 'lucide-react';

// Types and Interfaces
interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  imgUrl: string;
}

interface Playlist {
  name: string;
  coverUrl: string;
  creator: string;
  duration: string;
  tracks: Track[];
}

interface DropdownMenuProps {
  id: string;
  isOpen: boolean;
}

// Event handler types
type DropdownItemClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const PlaylistPage: React.FC = () => {
  // Track which dropdown is currently open (if any)
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const playlist: Playlist = {
    name: "Chill Vibes",
    coverUrl: "/api/placeholder/300/300",
    creator: "Music Lover",
    duration: "2h 35min",
    tracks: [
      { id: 1, title: "Summer Breeze", artist: "Chill Masters", duration: "3:24", imgUrl: "/api/placeholder/40/40" },
      { id: 2, title: "Ocean Waves", artist: "Beach Tunes", duration: "4:12", imgUrl: "/api/placeholder/40/40" },
      { id: 3, title: "Mountain Air", artist: "Nature Sounds", duration: "3:45", imgUrl: "/api/placeholder/40/40" },
      { id: 4, title: "Starlight", artist: "Night Sky", duration: "3:33", imgUrl: "/api/placeholder/40/40" },
      { id: 5, title: "Forest Rain", artist: "Natural Beats", duration: "4:01", imgUrl: "/api/placeholder/40/40" },
    ]
  };

  // Toggle dropdown visibility
  const toggleDropdown = (id: string): void => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Dropdown menu component
  const DropdownMenu: React.FC<DropdownMenuProps> = ({ id, isOpen }) => {
    const handleAddToQueue: DropdownItemClickHandler = (event) => {
      event.stopPropagation();
      // Add implementation
    };

    const handleAddToPlaylist: DropdownItemClickHandler = (event) => {
      event.stopPropagation();
      // Add implementation
    };

    const handleShare: DropdownItemClickHandler = (event) => {
      event.stopPropagation();
      // Add implementation
    };

    const handleViewArtist: DropdownItemClickHandler = (event) => {
      event.stopPropagation();
      // Add implementation
    };

    return (
      <>
        {/* Mobile dropdown (slides up from bottom) */}
        <div 
          className={`
            md:hidden fixed inset-x-0 bottom-0 bg-gray-800 rounded-t-xl shadow-lg
            transform transition-transform duration-900 ease-in-out z-50
            ${isOpen ? 'translate-y-0' : 'translate-y-full'}
          `}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <div className="py-4">
            {/* Drag indicator */}
            <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
            <button 
              onClick={handleAddToQueue}
              className="w-full text-left px-6 py-4 text-base text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Add to Queue
            </button>
            <button 
              onClick={handleAddToPlaylist}
              className="w-full text-left px-6 py-4 text-base text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Add to Playlist
            </button>
            <button 
              onClick={handleShare}
              className="w-full text-left px-6 py-4 text-base text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Share Song
            </button>
            <button 
              onClick={handleViewArtist}
              className="w-full text-left px-6 py-4 text-base text-gray-300 hover:bg-gray-700 hover:text-white border-b border-gray-700"
            >
              View Artist
            </button>
          </div>
        </div>

        {/* Desktop dropdown (regular dropdown) */}
        <div 
          className={`
            hidden md:block absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 
            ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ease-in-out z-50
            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <div className="py-1">
            <button 
              onClick={handleAddToQueue}
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Add to Queue
            </button>
            <button 
              onClick={handleAddToPlaylist}
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Add to Playlist
            </button>
            <button 
              onClick={handleShare}
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Share Song
            </button>
            <button 
              onClick={handleViewArtist}
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              View Artist
            </button>
          </div>
        </div>
      </>
    );
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      {/* Mobile Layout (sm) */}
      <div className="md:hidden p-0">
        <div className="flex flex-col items-center mt-5">
          <img
            src={"https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png"}
            alt="Playlist Cover"
            className="w-72 h-72 shadow-lg mb-6 object-cover"
          />
          
          <div className="text-left w-full mb-4">
            <h1 className="text-lg font-bold">{playlist.name}</h1>
            <p className="text-gray-300 text-sm mt-1">{playlist.creator}</p>
          </div>

          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex items-center space-x-4">
              <Heart className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Share2 className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Download className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <div className="relative dropdown-container">
                <MoreHorizontal 
                  className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    toggleDropdown('header');
                  }}
                />
                <DropdownMenu id="header" isOpen={openDropdownId === 'header'} />
              </div>
            </div>
            <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition">
              <Play className="w-6 h-6 text-black" fill="black" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (md and up) */}
      <div className="hidden md:block p-0">
        <div className="flex items-end space-x-6 mb-6">
          <img
            src={"https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png"}
            alt="Playlist Cover"
            className="w-72 h-72 shadow-lg object-cover"
          />
          <div className="flex-1">
            <p className="text-sm uppercase mb-2">Playlist</p>
            <h1 className="text-4xl font-bold mb-6">{playlist.name}</h1>
            <div className="flex items-center text-sm text-gray-300">
              <span className="font-bold text-white">{playlist.creator}</span>
              <span className="mx-1">•</span>
              <span>{playlist.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 mb-6">
          <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition">
            <Play className="w-8 h-8 text-black" fill="black" />
          </button>
          <Heart className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
          <Share2 className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
          <Download className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
          <div className="relative dropdown-container">
            <MoreHorizontal 
              className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                toggleDropdown('header');
              }}
            />
            <DropdownMenu id="header" isOpen={openDropdownId === 'header'} />
          </div>
        </div>
      </div>

      {/* Tracks Table */}
      <div className="px-0">
        <table className="w-full">
          <thead className="border-b border-white/10 hidden md:table-header-group">
            <tr className="text-gray-400 text-left text-sm">
              <th className="pb-2 w-12">#</th>
              <th className="pb-2">Title</th>
              <th className="pb-2">Duration</th>
              <th className="pb-2 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.map((track, index) => (
              <tr key={track.id} className="hover:bg-white/10">
                <td className="py-3 w-16">
                  <div className="md:hidden">
                    <img src={"https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png"} alt={track.title} className="w-14 h-14 object-cover rounded" />
                  </div>
                  <span className="hidden md:block text-gray-400">{index + 1}</span>
                </td>
                <td className="py-3">
                  <div>
                    <p className="text-white font-medium text-sm">{track.title}</p>
                    <p className="text-sm text-gray-400">{track.artist}</p>
                  </div>
                </td>
                <td className="py-3 text-gray-400 hidden md:table-cell">
                  {track.duration}
                </td>
                <td className="py-3 w-12 text-right relative">
                  <div className="dropdown-container">
                    <MoreHorizontal 
                      className="w-4 h-4 text-gray-400 cursor-pointer"
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        toggleDropdown(`track-${track.id}`);
                      }}
                    />
                    <DropdownMenu 
                      id={`track-${track.id}`} 
                      isOpen={openDropdownId === `track-${track.id}`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistPage;