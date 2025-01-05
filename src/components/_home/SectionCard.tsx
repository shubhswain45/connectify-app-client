interface PlaylistCard {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
}

const SectionCard: React.FC<PlaylistCard> = ({ title, description }) => (
    <div className="bg-[#1f1f1f] hover:bg-[#353433] transition-all p-4 rounded-lg cursor-pointer group">
        <div className="aspect-square bg-gray-700 mb-4 rounded-md relative overflow-hidden">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 right-2 z-10">
                <div className="bg-green-500 rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </div>
        <h3 className="text-white font-semibold text-base mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-400 truncate">{description}</p>
    </div>
);


export default SectionCard