import React from 'react';
import { Play, Clock, MoreHorizontal, Heart, Download, Share2 } from 'lucide-react';

const SpotifyPlaylist = () => {
  const songs = [
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
    { id: 2, title: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "5:56" },
    { id: 3, title: "Hotel California", artist: "Eagles", duration: "6:30" },
    { id: 4, title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" },
  ];

  return (
    <div className=" min-h-screen text-white p-0">
      {/* Desktop Header */}
      <div className="hidden md:flex items-start gap-8 mb-8">
        <img 
          src="https://cdn.vox-cdn.com/thumbor/J1CL5bMzlkZAwj9vEdFtqsAewTA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25564546/sethrollins.jpg"
          alt="Playlist Cover" 
          className="w-64 h-64 shadow-2xl"
        />
        <div className="flex flex-col justify-end h-64">
          <span className="text-sm uppercase mb-2">Playlist</span>
          <h1 className="text-8xl font-bold mb-6">Rock Classics</h1>
          <div className="text-sm">
            <span className="text-gray-400">Created by </span>
            <span className="font-bold">Spotify</span>
            <div className="flex items-center gap-2 mt-2 text-gray-400">
              <span>1,234,567 likes</span>
              <span>•</span>
              <span>50 songs</span>
              <span>•</span>
              <span>3hr 25min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex flex-col items-center mb-6">
        <img 
          src="https://cdn.vox-cdn.com/thumbor/J1CL5bMzlkZAwj9vEdFtqsAewTA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25564546/sethrollins.jpg"
          alt="Playlist Cover" 
          className="w-48 h-48 shadow-2xl mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">Rock Classics</h1>
        <p className="text-gray-400 mb-2">Created by Spotify</p>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>1,234,567 likes</span>
          <span>•</span>
          <span>50 songs</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4">
          <Heart className="w-6 h-6 text-green-500" />
          <Download className="w-6 h-6" />
          <Share2 className="w-6 h-6" />
        </div>
        <button className="bg-green-500 rounded-full p-3 hover:bg-green-400 transition-colors">
          <Play className="w-8 h-8 fill-white" />
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800">
              <th className="text-left py-2 w-8">#</th>
              <th className="text-left py-2">Title</th>
              <th className="text-left py-2">Album</th>
              <th className="text-left py-2">Date Added</th>
              <th className="text-right py-2"><Clock className="w-5 h-5 inline" /></th>
              <th className="w-16"></th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id} className="hover:bg-gray-800/50 group">
                <td className="py-3">{index + 1}</td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://cdn.vox-cdn.com/thumbor/J1CL5bMzlkZAwj9vEdFtqsAewTA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25564546/sethrollins.jpg"
                      alt={song.title}
                      className="w-10 h-10"
                    />
                    <div>
                      <div className="font-medium">{song.title}</div>
                      <div className="text-sm text-gray-400">{song.artist}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-gray-400">Greatest Hits</td>
                <td className="py-3 text-gray-400">2 days ago</td>
                <td className="py-3 text-right text-gray-400">{song.duration}</td>
                <td>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile List */}
      <div className="md:hidden">
  {songs.map((song, index) => (
    <div
      key={song.id}
      className="flex items-center gap-3 p-3 hover:bg-gray-800/50 transition duration-300 ease-in-out hover:rounded-lg"
    >
      <img
        src="https://cdn.vox-cdn.com/thumbor/J1CL5bMzlkZAwj9vEdFtqsAewTA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25564546/sethrollins.jpg"
        alt={song.title}
        className="w-12 h-12"
      />
      <div className="flex-grow">
        <div className="font-medium">{song.title}</div>
        <div className="text-sm text-gray-400">{song.artist}</div>
      </div>
      <button className="p-2">
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>
  ))}
</div>

    </div>
  );
};

export default SpotifyPlaylist;