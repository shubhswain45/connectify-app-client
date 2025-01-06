import { Home, Search, Plus } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface Playlist {
    id: number;
    name: string;
    image: string;
    trackCount: number;
}

type Genre = 'Hip Hop' | 'Rock' | 'Jazz' | 'Electronic' | 'Classical' | 'Pop' | 'R&B' | 'Country';
type Adjective = 'Best' | 'Ultimate' | 'Perfect' | 'Essential' | 'Top' | 'Greatest' | 'Modern' | 'Classic';
type Year = '2024' | '2023' | '2022' | '2021';

const LeftSidebar: React.FC = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Generate random playlist data
    const generatePlaylists = (): Playlist[] => {
        const genres: Genre[] = ['Hip Hop', 'Rock', 'Jazz', 'Electronic', 'Classical', 'Pop', 'R&B', 'Country'];
        const adjectives: Adjective[] = ['Best', 'Ultimate', 'Perfect', 'Essential', 'Top', 'Greatest', 'Modern', 'Classic'];
        const years: Year[] = ['2024', '2023', '2022', '2021'];
        
        return Array(20).fill(null).map((_, index): Playlist => {
            const genre = genres[Math.floor(Math.random() * genres.length)];
            const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
            const year = years[Math.floor(Math.random() * years.length)];
            
            return {
                id: index + 1,
                name: `${adjective} ${genre} ${year}`,
                image: `/api/placeholder/48/48`,
                trackCount: Math.floor(Math.random() * 100) + 1,
            };
        });
    };

    // Simulate data fetching
    useEffect(() => {
        const fetchPlaylists = async (): Promise<void> => {
            try {
                setLoading(true);
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 2000));
                const data = generatePlaylists();
                setPlaylists(data);
            } catch (err) {
                setError('Failed to load playlists');
                console.error('Error loading playlists:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylists();
    }, []);

    // Skeleton loader component
    const PlaylistSkeleton: React.FC = () => (
        <div className="flex items-center gap-3 py-1 animate-pulse">
            <div className="w-12 h-12 bg-gray-800 rounded"></div>
            <div className="flex flex-col gap-2 flex-1">
                <div className="h-4 bg-gray-800 rounded w-32"></div>
                <div className="h-3 bg-gray-800 rounded w-24"></div>
            </div>
        </div>
    );

    return (
        <aside className="hidden rounded-xl md:flex flex-col w-64 bg-[#121212] text-white fixed left-0 top-16 bottom-20">
            <nav className="flex-1 flex flex-col overflow-hidden">
                {/* Fixed top section */}
                <div className="p-6 space-y-6 flex-shrink-0">
                    <div className="space-y-3">
                        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                            <Home size={24} />
                            Home
                        </a>
                        <a href="#" className="flex items-mcenter gap-4 text-gray-300 hover:text-white transition">
                            <Search size={24} />
                            Search
                        </a>
                    </div>

                    <div className="pt-6 border-t border-gray-800">
                        <div className="flex items-center gap-2 mb-4 text-gray-300 hover:text-white transition group cursor-pointer">
                            <div className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center group-hover:bg-gray-700">
                                <Plus size={16} />
                            </div>
                            <span className="text-sm font-semibold">Create Playlist</span>
                        </div>
                    </div>
                </div>

                {/* Scrollable section */}
                <div className="flex-1 overflow-hidden flex flex-col min-h-0">
                    <div className="px-6">
                        <h2 className="text-sm font-semibold mb-4">YOUR LIBRARY</h2>
                    </div>
                    
                    <div className="px-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                        {error && (
                            <div className="text-red-500 text-sm py-2">{error}</div>
                        )}
                        
                        <div className="space-y-2 pb-4">
                            {loading ? (
                                // Show skeleton loaders while loading
                                Array.from({ length: 8 }).map((_, index) => (
                                    <PlaylistSkeleton key={index} />
                                ))
                            ) : (
                                // Show actual playlists
                                playlists.map((playlist) => (
                                    <a
                                        key={playlist.id}
                                        href="#"
                                        className="flex items-center gap-3 text-gray-300 hover:text-white text-sm py-1 transition group"
                                    >
                                        <img 
                                            src={playlist.image} 
                                            alt={playlist.name}
                                            className="w-12 h-12 object-cover rounded shadow-lg"
                                        />
                                        <div className="flex flex-col min-w-0">
                                            <span className="truncate font-medium group-hover:text-white">
                                                {playlist.name}
                                            </span>
                                            <span className="text-xs text-gray-400 truncate">
                                                Playlist • {playlist.trackCount} songs
                                            </span>
                                        </div>
                                    </a>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default LeftSidebar;