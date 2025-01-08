import { Play } from 'lucide-react';
import React from 'react';

const SectionCard = ({ showTotalTracks, title }: { showTotalTracks: boolean, title: string }) => (
    <div
        className="flex-shrink-0 w-40 md:w-48 lg:w-56 p-2 rounded-lg shadow-sm group hover:bg-gray-900 transition-all duration-300 cursor-pointer"
    >
        <div className="relative">
            <div className="w-36 md:w-44 lg:w-52 h-36 md:h-44 lg:h-52 bg-gray-700 rounded-md mb-1 group-hover:bg-gray-800 transition-all duration-300" />

            {/* Play Button Overlay */}
            <div className="absolute bottom-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button
                    className="bg-green-500 rounded-full p-3 hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-lg"
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log(`Playing track `);
                    }}
                >
                    <Play className="h-6 w-6 text-black fill-current" />
                </button>
            </div>
        </div>

        <h3 className="font-medium text-sm text-gray-900 group-hover:text-white truncate">{title}</h3>
        <p className="text-xs text-gray-500 group-hover:text-gray-300 truncate">shubh</p>
    </div>
);

export default SectionCard;