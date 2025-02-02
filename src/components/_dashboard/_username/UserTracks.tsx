import React from 'react';
import { Play, MoreHorizontal } from 'lucide-react';

interface TopTrack {
    id: number;
    title: string;
    artist: string;
    album: string;
    plays: string;
    duration: string;
    imageUrl: string;
    date: string;
}

interface UserData {
    name: string;
    username: string;
    bio: string;
    profileImage: string;
    followers: number;
    following: number;
    topTracks: TopTrack[];
}

const userData: UserData = {
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
            imageUrl: "/api/placeholder/48/48",
            date: "Dec 31, 2023",
        },
        {
            id: 2,
            title: "Sweet Child O' Mine",
            artist: "Guns N' Roses",
            album: "Appetite for Destruction",
            plays: "1,987,654",
            duration: "5:56",
            imageUrl: "/api/placeholder/48/48",
            date: "Dec 30, 2023",
        },
        {
            id: 3,
            title: "Hotel California",
            artist: "Eagles",
            album: "Hotel California",
            plays: "1,876,543",
            duration: "6:30",
            imageUrl: "/api/placeholder/48/48",
            date: "Dec 29, 2023",
        },
    ],
};

const UserTracks = () => {
    return (
        <div className="px-0 py-4 md:py-6">
            <div className="space-y-2 sm:space-y-4">
                {userData.topTracks.map((track) => (
                    <div
                        key={track.id}
                        className="flex items-start gap-2 sm:gap-4 p-2 sm:p-4 hover:bg-gray-800/50 rounded-md group relative"
                    >
                        {/* Image and Play Button Container */}
                        <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] flex-shrink-0">
                            <img
                                src={"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"}
                                alt={track.title}
                                className="w-full h-full object-cover rounded-md"
                            />
                            <button className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            {/* Title and More Button */}
                            <div className="flex items-start justify-between gap-2 sm:gap-4">
                                <h3 className="text-sm sm:text-base md:text-lg font-bold truncate">
                                    {track.title}
                                </h3>
                                <button className="text-gray-400 hover:text-white p-1">
                                    <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>

                            {/* Artist */}
                            <p className="text-gray-400 text-xs sm:text-sm mt-0.5 sm:mt-1">
                                {track.artist}
                            </p>

                            {/* Description/Album - Hidden on mobile */}
                            <p className="hidden sm:block text-gray-400 mt-2 sm:mt-4 text-xs line-clamp-2">
                                From the album {track.album}
                            </p>

                            {/* Date and Duration */}
                            <div className="flex items-center gap-2 mt-2 sm:mt-4 text-xs text-gray-400">
                                <span className="hidden sm:inline">{track.date}</span>
                                <span className="hidden sm:inline">•</span>
                                <span>{track.duration}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTracks;