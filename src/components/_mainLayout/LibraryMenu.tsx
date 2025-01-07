// Dummy playlist data
const playlists = [
    { id: 1, name: "Liked Songs", songCount: 123, imageUrl: "/api/placeholder/60/60" },
    { id: 2, name: "My Playlist #1", songCount: 45, imageUrl: "/api/placeholder/60/60" },
    { id: 3, name: "Road Trip Mix", songCount: 67, imageUrl: "/api/placeholder/60/60" },
    { id: 4, name: "Chill Vibes", songCount: 89, imageUrl: "/api/placeholder/60/60" },
    { id: 5, name: "Workout Mix", songCount: 34, imageUrl: "/api/placeholder/60/60" },
    { id: 6, name: "Party Hits", songCount: 56, imageUrl: "/api/placeholder/60/60" },
];


interface LibraryMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LibraryMenu: React.FC<LibraryMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-0 z-40 bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-4 flex items-center justify-between">
                    <h2 className="text-white text-xl font-bold">Your Library</h2>
                    <button
                        onClick={onClose}
                        className="text-white p-2"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Playlists */}
                <div className="flex-1 overflow-y-auto">
                    {playlists.map((playlist) => (
                        <div
                            key={playlist.id}
                            className="flex items-center p-4 hover:bg-neutral-800/50"
                        >
                            <div className="w-12 h-12 bg-neutral-800 rounded-sm flex-shrink-0">
                                <img
                                    src={playlist.imageUrl}
                                    alt={playlist.name}
                                    className="w-full h-full object-cover rounded-sm"
                                />
                            </div>
                            <div className="ml-4">
                                <p className="text-white font-medium">{playlist.name}</p>
                                <p className="text-neutral-400 text-sm">Playlist • {playlist.songCount} songs</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
