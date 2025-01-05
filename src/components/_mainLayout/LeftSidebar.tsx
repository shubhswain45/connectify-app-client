import { Home, Library, Search } from 'lucide-react'
import React from 'react'

function LeftSidebar() {
    return (
        <aside className="hidden md:block w-64 bg-black text-white fixed left-0 top-16 bottom-20 overflow-y-auto">
            <nav className="space-y-6 p-6">
                <div className="space-y-3">
                    <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white">
                        <Home size={24} />
                        Home
                    </a>
                    <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white">
                        <Search size={24} />
                        Search
                    </a>
                    <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white">
                        <Library size={24} />
                        Your Library
                    </a>
                </div>

                <div className="pt-6 border-t border-gray-800">
                    <h2 className="text-sm font-semibold mb-4">PLAYLISTS</h2>
                    <div className="space-y-3">
                        <a href="#" className="block text-gray-300 hover:text-white text-sm">
                            Create Playlist
                        </a>
                        <a href="#" className="block text-gray-300 hover:text-white text-sm">
                            Liked Songs
                        </a>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default LeftSidebar