import { Home, Library, Search, Plus, Heart } from 'lucide-react'
import React from 'react'
import SvgIcon from '../../../public/svgs/SvgIcon';

function LeftSidebar() {
    // Dummy playlist data
    const playlists = [
        "Chill Vibes 2024",
        "Workout Mix",
        "Road Trip Favorites",
        "90s Hits",
        "Study Session",
        "Party Anthems",
        "Acoustic Covers",
        "Morning Coffee",
        "Evening Jazz",
        "Running Playlist",
        "Meditation Sounds",
        "Summer Hits",
        "Classic Rock",
        "Hip Hop Essentials",
        "Indie Discoveries",
        "Dance Mix",
        "Relaxing Piano",
        "Gym Motivation",
        "Driving Songs",
        "Cooking Tunes"
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 bg-black text-white fixed left-0 top-16 bottom-20">
            <nav className="flex-1 overflow-hidden">
                <div className="p-6 space-y-6">
                    <div className="space-y-3">
                        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                            <Home size={24} />
                            Home
                        </a>
                        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                            <SvgIcon name='Explore'/>
                            Explore
                        </a>
                        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                            <Search size={24} />
                            Search
                        </a>
                    </div>

                    <div className="pt-6 border-t border-gray-800">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-semibold">PLAYLISTS</h2>
                        </div>
                        <div className="space-y-3">
                            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white text-sm transition">
                                <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center">
                                    <Plus size={16} />
                                </div>
                                Create Playlist
                            </a>
                            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white text-sm transition">
                                <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-400 rounded-sm flex items-center justify-center">
                                    <Heart size={16} />
                                </div>
                                Liked Songs
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scrollable playlist section */}
                <div className="px-6 overflow-y-auto max-h-[calc(100vh-400px)] scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                    <div className="space-y-2">
                        {playlists.map((playlist, index) => (
                            <a
                                key={index}
                                href="#"
                                className="block text-gray-300 hover:text-white text-sm py-1 transition"
                            >
                                {playlist}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default LeftSidebar