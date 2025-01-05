import React, { useState } from 'react';
import { Search, MoreHorizontal, Clock, Play } from 'lucide-react';

const musicData = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", duration: "5:55", imageUrl: "/api/placeholder/40/40" },
  { id: 2, title: "Imagine", artist: "John Lennon", album: "Imagine", duration: "3:03", imageUrl: "/api/placeholder/40/40" },
  { id: 3, title: "Sweet Child O' Mine", artist: "Guns N' Roses", album: "Appetite for Destruction", duration: "5:56", imageUrl: "/api/placeholder/40/40" },
  { id: 4, title: "Billie Jean", artist: "Michael Jackson", album: "Thriller", duration: "4:54", imageUrl: "/api/placeholder/40/40" },
  { id: 5, title: "Smells Like Teen Spirit", artist: "Nirvana", album: "Nevermind", duration: "5:01", imageUrl: "/api/placeholder/40/40" },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'songs', label: 'Songs' },
    { id: 'artists', label: 'Artists' },
    { id: 'playlists', label: 'Playlists' },
    { id: 'albums', label: 'Albums' },
    { id: 'profiles', label: 'Profiles' },
  ];

  const filteredData = searchTerm ? musicData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.artist.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen w-full text-white">
      <div className="max-w-full overflow-x-hidden">
        {/* Search Header */}
        <div className="p-4 md:p-6">
          <div className="relative max-w-[364px]">
            <Search className="absolute left-3 top-2.5 text-gray-700" size={20} />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="w-full bg-white rounded-full py-2 px-12 text-gray-900 placeholder-gray-500 text-sm focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 md:px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 mb-6 w-max">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                  ${activeFilter === filter.id 
                    ? 'bg-white text-black' 
                    : 'text-white bg-transparent hover:bg-gray-800'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 md:px-6">
          {searchTerm && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Songs</h2>
              
              {/* Table Header */}
              <div className="grid grid-cols-[16px,1fr,auto] md:grid-cols-[16px,4fr,3fr,2fr,auto] gap-4 px-4 py-2 text-gray-400 text-sm border-b border-gray-800">
                <div>#</div>
                <div>Title</div>
                <div className="hidden md:block">Album</div>
                <div className="hidden md:block">Artist</div>
                <div className="flex items-center justify-end">
                  <Clock size={16} />
                </div>
              </div>

              {/* Table Body */}
              <div className="overflow-y-auto">
                {filteredData.map((item, index) => (
                  <div 
                    key={item.id}
                    className="grid grid-cols-[16px,1fr,auto] md:grid-cols-[16px,4fr,3fr,2fr,auto] gap-4 px-4 py-2 text-sm hover:bg-gray-800 rounded-md group"
                  >
                    <div className="flex items-center text-gray-400 group-hover:text-white">
                      <span className="group-hover:hidden">{index + 1}</span>
                      <Play size={14} className="hidden group-hover:block" />
                    </div>
                    <div className="flex items-center gap-3 min-w-0">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-10 h-10 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-white truncate">{item.title}</div>
                        <div className="text-gray-400 truncate md:hidden">{item.artist}</div>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center text-gray-400 truncate">{item.album}</div>
                    <div className="hidden md:flex items-center text-gray-400 truncate">{item.artist}</div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <button className="opacity-0 group-hover:opacity-100">
                        <MoreHorizontal size={20} />
                      </button>
                      <span className="w-12 text-right">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Initial State */}
          {!searchTerm && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">Search Spotify</h2>
              <p className="text-gray-400">Find your favorite songs, artists, albums, podcasts, and playlists.</p>
            </div>
          )}

          {/* Empty State */}
          {searchTerm && filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No results found for "{searchTerm}"</p>
              <p className="text-sm text-gray-500">Please make sure your words are spelled correctly or use fewer or different keywords.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;