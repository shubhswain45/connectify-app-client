import React from 'react';
import { Clock, MoreHorizontal, Play, Share2 } from 'lucide-react';

const userData = {
  name: "John Doe",
  username: "@johndoe",
  bio: "🎵 Music enthusiast | Playlist curator | Always exploring new sounds",
  profileImage: "/api/placeholder/200/200",
  followers: 128,
  following: 89,
  topTracks: [
    { 
      id: 1, 
      title: "Bohemian Rhapsody", 
      artist: "Queen", 
      album: "A Night at the Opera",
      plays: "2,345,678",
      duration: "5:55", 
      imageUrl: "/api/placeholder/48/48" 
    },
    { 
      id: 2, 
      title: "Sweet Child O' Mine", 
      artist: "Guns N' Roses", 
      album: "Appetite for Destruction",
      plays: "1,987,654",
      duration: "5:56", 
      imageUrl: "/api/placeholder/48/48" 
    },
    { 
      id: 3, 
      title: "Hotel California", 
      artist: "Eagles", 
      album: "Hotel California",
      plays: "1,876,543",
      duration: "6:30", 
      imageUrl: "/api/placeholder/48/48" 
    },
    { 
      id: 4, 
      title: "Stairway to Heaven", 
      artist: "Led Zeppelin", 
      album: "Led Zeppelin IV",
      plays: "1,765,432",
      duration: "8:02", 
      imageUrl: "/api/placeholder/48/48" 
    },
    { 
      id: 5, 
      title: "Imagine", 
      artist: "John Lennon", 
      album: "Imagine",
      plays: "1,654,321",
      duration: "3:03", 
      imageUrl: "/api/placeholder/48/48" 
    }
  ]
};

const UserProfile = () => {
  return (
    <div className="min-h-screen w-full text-white">
      <div className="max-w-full overflow-x-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-b p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src={userData.profileImage} 
                alt={userData.name}
                className="w-[200px] h-[200px] rounded-full shadow-2xl"
              />
            </div>

            {/* Profile Info */}
            <div className="flex flex-col justify-end">
              <span className="text-sm text-gray-300 mb-2">Profile</span>
              <h1 className="text-7xl font-bold mb-4">{userData.name}</h1>
              <div className="text-gray-300 mb-2">{userData.username}</div>
              <p className="text-gray-400 mb-4 max-w-2xl">{userData.bio}</p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>{userData.followers} Followers</span>
                <span>•</span>
                <span>{userData.following} Following</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 flex items-center gap-4 sticky top-0 z-10 backdrop-blur-sm">
          <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <Play className="w-7 h-7 ml-1" fill="currentColor" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Share2 className="w-7 h-7" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <MoreHorizontal className="w-7 h-7" />
          </button>
        </div>

        {/* Top Tracks Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Top Tracks</h2>
          
          {/* Table Header */}
          <div className="grid grid-cols-[16px,4fr,3fr,2fr,auto] gap-4 px-4 py-3 text-gray-400 text-base border-b border-gray-800 sticky top-24 backdrop-blur-sm">
            <div>#</div>
            <div>Title</div>
            <div className="hidden md:block">Album</div>
            <div className="hidden md:block">Plays</div>
            <div className="flex items-center justify-end">
              <Clock size={18} />
            </div>
          </div>

          {/* Table Body */}
          <div>
            {userData.topTracks.map((track, index) => (
              <div 
                key={track.id}
                className="grid grid-cols-[16px,4fr,3fr,2fr,auto] gap-4 px-4 py-4 text-base hover:bg-gray-800 rounded-md group"
              >
                <div className="flex items-center text-gray-400 group-hover:text-white">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Play size={16} className="hidden group-hover:block" />
                </div>
                <div className="flex items-center gap-4 min-w-0">
                  <img 
                    src={track.imageUrl} 
                    alt={track.title} 
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-white text-base font-medium truncate">{track.title}</div>
                    <div className="text-gray-400 text-base truncate">{track.artist}</div>
                  </div>
                </div>
                <div className="hidden md:flex items-center text-gray-400 truncate text-base">
                  {track.album}
                </div>
                <div className="hidden md:flex items-center text-gray-400 text-base">
                  {track.plays}
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <button className="opacity-0 group-hover:opacity-100">
                    <MoreHorizontal size={22} />
                  </button>
                  <span className="w-16 text-right text-base">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;