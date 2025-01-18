import { Play } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { useTrackStore } from '@/store/useTrackStore';
import { Track } from '../../../gql/graphql';

const SectionCard = ({ track }: { track: Track }) => {
    const { trackDetails, setTrackDetails } = useTrackStore()

    const isPlayingCurrentSong =
        trackDetails.id === track.id && trackDetails.isPlaying;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // Prevent the click from propagating to parent elements (e.g., Link)
        e.stopPropagation();

        if (isPlayingCurrentSong) {
            setTrackDetails({ isPlaying: false });
            return;
        }

        setTrackDetails({
            id: track.id,
            title: track.title,
            artist: track.artist,
            duration: track.duration,
            coverImageUrl: track.coverImageUrl || "",
            audioFileUrl: track.audioFileUrl,
            hasLiked: track.hasLiked,
            authorName: track.authorName,
            isPlaying: true,
            repeatable: false,
            isQueued: false
        });
    };

    return (

        <div
            className="flex-shrink-0 w-40 md:w-48 lg:w-56 p-2 rounded-lg shadow-sm group hover:bg-gray-900 transition-all duration-300 cursor-pointer"
        >
            <div className="relative">
                <div className="w-36 md:w-44 lg:w-52 h-36 md:h-44 lg:h-52 overflow-hidden rounded-md mb-1">
                    <div className="relative w-full h-full">
                        <Image
                            src={track.coverImageUrl || ""}
                            alt={track.title}
                            fill
                            sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 208px"
                            className="object-cover group-hover:scale-105 transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute bottom-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button
                        className="bg-green-500 rounded-full p-3 hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-lg"
                        onClick={handleClick}
                    >
                        <Play className="h-6 w-6 text-black fill-current" />
                    </button>
                </div>
            </div>

            <h3 className="font-medium text-sm text-gray-900 group-hover:text-white truncate">{track.title}</h3>
            <p className="text-xs text-gray-500 group-hover:text-gray-300 truncate">shubh</p>
        </div>
    );
}


export default SectionCard;