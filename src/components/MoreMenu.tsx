import React, { useState } from 'react';
import { 
    X, Share2, Plus, Heart, User2, Info, 
    Play, Clock, Settings, RotateCw, Timer 
} from 'lucide-react';
import { useTrackStore } from '@/store/useTrackStore';
import { Switch } from "@/components/ui/switch";

interface MoreMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MoreMenu: React.FC<MoreMenuProps> = ({ isOpen, setIsOpen }) => {
    const [showPlaybackOptions, setShowPlaybackOptions] = useState(false);
    const [speedValue, setSpeedValue] = useState(1);
    const [loopEnabled, setLoopEnabled] = useState(false);

    const { trackDetails } = useTrackStore();

    if (!isOpen) return null;

    const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpeedValue(parseFloat(e.target.value));
    };

    const menuItems = [
        { icon: <Plus size={24} />, label: "Add to Playlist" },
        { icon: <Clock size={24} />, label: "Add to Queue" },
        { icon: <Heart size={24} />, label: "Like Track" },
        { icon: <Share2 size={24} />, label: "Share" },
        { icon: <Settings size={24} />, label: "Ambition Mode" },
        { icon: <Info size={24} />, label: "Track Info" }
    ];

    return (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
            <div className="h-full w-full flex flex-col p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-end mb-8">
                    <button
                        onClick={() => {setIsOpen(false); setShowPlaybackOptions(false)}}
                        className="p-2 rounded-full hover:bg-zinc-800/90 transition-colors"
                    >
                        <X size={24} className="text-zinc-400 hover:text-white" />
                    </button>
                </div>

                {/* Track Info */}
                <div className="flex items-center gap-6 mb-4">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-zinc-800">
                        {trackDetails.coverImageUrl && (
                            <img
                                src={trackDetails.coverImageUrl}
                                alt={trackDetails.title}
                                className="object-cover w-full h-full"
                            />
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white mb-1">{trackDetails.title}</h2>
                        <p className="text-zinc-400">{trackDetails.authorName}</p>
                    </div>
                </div>

                {/* Menu Items Container */}
                <div className="space-y-0">
                    {/* Initial Separator */}
                    <div className="h-px bg-zinc-800 my-4" />

                    {/* Regular Menu Items */}
                    {menuItems.slice(0, 5).map((item, index) => (
                        <div key={index}>
                            <button 
                                className="w-full p-4 flex items-center gap-6 rounded-xl hover:bg-zinc-800/90 transition-all duration-200 border border-transparent hover:border-zinc-800"
                            >
                                <span className="text-zinc-400">{item.icon}</span>
                                <span className="font-medium text-zinc-200">{item.label}</span>
                            </button>
                            <div className="h-px bg-zinc-800 my-4" />
                        </div>
                    ))}

                    {/* Playback Section */}
                    <div>
                        <button 
                            onClick={() => setShowPlaybackOptions(!showPlaybackOptions)}
                            className={`w-full p-4 flex items-center gap-6 rounded-xl transition-all duration-300 ${
                                showPlaybackOptions ? 'bg-zinc-800/90 text-white' : 'hover:bg-zinc-800/90'
                            }`}
                        >
                            <Play size={24} className={`transition-colors duration-300 ${showPlaybackOptions ? 'text-white' : 'text-zinc-400'}`} />
                            <span className={`font-medium transition-colors duration-300 ${showPlaybackOptions ? 'text-white' : 'text-zinc-200'}`}>
                                Playback
                            </span>
                            <div className={`ml-auto transform transition-transform duration-300 ${showPlaybackOptions ? 'rotate-180' : ''}`}>
                                <svg
                                    className="w-5 h-5 text-zinc-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            showPlaybackOptions ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}>
                            <div className="bg-zinc-900/95 rounded-xl overflow-hidden border border-zinc-800 shadow-lg">
                                <div className="border-b border-zinc-800">
                                    <div className="p-4 space-y-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <Timer className="w-4 h-4 text-zinc-400" />
                                                <span className="text-zinc-100">Playback Speed</span>
                                            </div>
                                            <span className="text-zinc-400 text-sm">{speedValue.toFixed(1)}x</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="0.5"
                                            max="2"
                                            step="0.1"
                                            value={speedValue}
                                            onChange={handleSpeedChange}
                                            className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <RotateCw className="w-4 h-4 text-zinc-400" />
                                            <span className="text-zinc-100">Loop Track</span>
                                        </div>
                                        <Switch
                                            checked={loopEnabled}
                                            onCheckedChange={setLoopEnabled}
                                            className="data-[state=checked]:bg-blue-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-px bg-zinc-800 my-4" />
                    </div>

                    {/* Remaining Menu Items */}
                    {menuItems.slice(5).map((item, index) => (
                        <div key={index}>
                            <button 
                                className="w-full p-4 flex items-center gap-6 rounded-xl hover:bg-zinc-800/90 transition-all duration-200 border border-transparent hover:border-zinc-800"
                            >
                                <span className="text-zinc-400">{item.icon}</span>
                                <span className="font-medium text-zinc-200">{item.label}</span>
                            </button>
                            <div className="h-px bg-zinc-800 my-4" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoreMenu;