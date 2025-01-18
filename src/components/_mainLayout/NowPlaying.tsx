import React, { useEffect, useState } from 'react'
import SvgIcon from '../../../public/svgs/SvgIcon'
import Image from 'next/image'
import { Button } from '../ui/Button'
import { useTrackStore } from '@/store/useTrackStore'

interface NowPlayingProps {
    isPlayerOpen: boolean;
    togglePlayer: () => void;
    currentTime: string;
    duration: string;
    progress: number;
    handleSeek: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleSkip: (direction: 'forward' | 'backward') => void
}

const NowPlaying: React.FC<NowPlayingProps> = ({
    isPlayerOpen,
    togglePlayer,
    currentTime,
    duration,
    progress,
    handleSeek,
    handleSkip
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [theme, setTheme] = useState<string[]>([])
    const { trackDetails, togglePlay } = useTrackStore()
    const [isPlaybackDrawerOpen, setIsPlaybackDrawerOpen] = useState(false)

    // Get a random theme set (each theme set contains 4 colors for more dynamic gradients)
    const gradientThemes = [
        ['#1DB954', '#191414', '#535353', '#1DB954'], // Spotify
        ['#FF512F', '#DD2476', '#FF512F', '#DD2476'], // Sunset
        ['#2E3192', '#1BFFFF', '#2E3192', '#1BFFFF'], // Ocean
        ['#7303c0', '#ec38bc', '#7303c0', '#ec38bc'], // Purple Rain
        ['#134E5E', '#71B280', '#134E5E', '#71B280'], // Forest
        ['#ff4e50', '#f9d423', '#ff4e50', '#f9d423'], // Fire
        ['#00c6ff', '#0072ff', '#00c6ff', '#0072ff'], // Summer Sky
        ['#4776E6', '#8E54E9', '#4776E6', '#8E54E9'], // Electric Violet
        ['#FDC830', '#F37335', '#FDC830', '#F37335'], // Golden Hour
        ['#FF0099', '#493240', '#FF0099', '#493240']  // Neon Night
    ];

    useEffect(() => {
        const randomTheme = gradientThemes[Math.floor(Math.random() * gradientThemes.length)];
        setTheme(randomTheme)
    }, [])

    return (
        <>
            <style>
                {`
                    .animated-gradient {
                        background: linear-gradient(
                            45deg,
                            ${theme[0]},
                            ${theme[1]},
                            ${theme[2]},
                            ${theme[3]}
                        );
                        background-size: 300% 300%;
                        animation: gradientShift 15s ease infinite;
                    }

                    @keyframes gradientShift {
                        0% {
                            background-position: 0% 50%;
                        }
                        25% {
                            background-position: 100% 50%;
                        }
                        50% {
                            background-position: 100% 100%;
                        }
                        75% {
                            background-position: 0% 100%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}
            </style>
            <div
                className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out animated-gradient ${isPlayerOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="h-full overflow-y-auto">
                    <div className="min-h-full flex flex-col px-4 md:px-8 py-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <button
                                onClick={togglePlayer}
                                className="p-2 hover:bg-transparent rounded-full transition-colors bg-transparent"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                            </button>
                            <h2 className="text-white text-sm font-bold">Now Playing</h2>
                            <button className="p-2 hover:bg-transparent rounded-full transition-colors bg-transparent" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                            </button>
                        </div>
                        <div className="aspect-square w-full max-w-[400px] mx-auto mb-6">
                            <div className="w-full h-full bg-gray-800 rounded-md shadow-2xl">
                                <Image
                                    src={trackDetails.coverImageUrl || ""}
                                    width={500}  // Image width
                                    height={500} // Image height
                                    alt="Satranga from ANIMAL"
                                    className="object-cover rounded-md"
                                />
                            </div>
                        </div>
                        {/* Track Info - Closer to album art */}
                        <div className="mb-5 w-full">
                            <div className="flex flex-col md:items-center w-full">
                                <div className="w-full flex items-center justify-between">
                                    <h3 className="text-white text-xl md:text-2xl font-bold">{trackDetails.title}</h3>
                                    <button className="text-white bg-transparent hover:bg-transparent hover:scale-110 p-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                    </button>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base">{trackDetails.authorName}</p>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-6">
                            <div className="w-full h-1 bg-gray-800 rounded-full mb-2 cursor-pointer"
                                onClick={(e) => handleSeek(e)}
                            >
                                <div
                                    className="h-full bg-white rounded-full hover:bg-green-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>{currentTime}</span>
                                <span>{duration}</span>
                            </div>
                        </div>

                        {/* Controls - Closer to progress bar */}
                        <div className="flex flex-col items-center gap-6">
                            {/* Main Controls */}
                            <div className="flex items-center justify-center w-full max-w-md gap-6">
                                <button className="text-white bg-transparent hover:bg-transparent hover:scale-110"
                                    onClick={() => handleSkip("backward")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                </button>

                                <button className="text-white bg-transparent hover:bg-transparent hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" x2="5" y1="19" y2="5" /></svg>
                                </button>

                                <button
                                    onClick={togglePlay}
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                    aria-label={trackDetails.isPlaying ? "Pause" : "Play"}
                                >
                                    {trackDetails.isPlaying ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="26"
                                            height="26"
                                            viewBox="0 0 24 24"
                                            fill="black"
                                        >
                                            <rect x="6" y="4" width="4" height="16" rx="1" />
                                            <rect x="14" y="4" width="4" height="16" rx="1" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="black"
                                        >
                                            <path d="M8 5v14l11-7L8 5z" />
                                        </svg>
                                    )}
                                </button>

                                <button className="text-white bg-transparent hover:bg-transparent hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" x2="19" y1="5" y2="19" /></svg>
                                </button>

                                <button className="text-white bg-transparent hover:bg-transparent hover:scale-110"
                                    onClick={() => handleSkip("forward")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
                                </button>

                            </div>

                            {/* Volume Control */}
                            <div className="flex items-center gap-2 w-full max-w-md">
                                <SvgIcon name='Volume' />

                                <div className="flex-1 h-1 bg-gray-800 rounded-full">
                                    <div className="w-1/2 h-full bg-white hover:bg-green-500 rounded-full cursor-pointer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Drawer Menu */}
                <div
                    className={`fixed inset-x-0 bottom-0 bg-[#282828] rounded-t-xl z-50 transition-transform duration-300 ease-out ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
                        }`}
                    style={{
                        maxHeight: '70vh',
                    }}
                >
                    {/* Drawer Handle */}
                    <div className="flex justify-center py-2">
                        <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* Drawer Content */}
                    <div className="px-4 py-2">
                        <div className="space-y-4">
                            {/* Menu Items */}
                            <div
                                className="flex items-center justify-between p-3 hover:bg-[#3e3e3e] hover:bg-opacity-30 rounded-md cursor-pointer"
                                onClick={() => {/* Add to playlist handler */ }}
                            >
                                <div className="flex items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <path d="M3 3h18v18H3z" />
                                        <path d="M12 8v8" />
                                        <path d="M8 12h8" />
                                    </svg>
                                    <span className="text-white">Add to Playlist</span>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-between p-3 hover:bg-[#3e3e3e] hover:bg-opacity-30 rounded-md cursor-pointer"
                            >
                                <div className="flex items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <line x1="8" y1="6" x2="21" y2="6" />
                                        <line x1="8" y1="12" x2="21" y2="12" />
                                        <line x1="8" y1="18" x2="21" y2="18" />
                                        <line x1="3" y1="6" x2="3.01" y2="6" />
                                        <line x1="3" y1="12" x2="3.01" y2="12" />
                                        <line x1="3" y1="18" x2="3.01" y2="18" />
                                    </svg>
                                    <span className="text-white">Add to Queue</span>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-between p-3 hover:bg-[#3e3e3e] hover:bg-opacity-30 rounded-md cursor-pointer"
                            >
                                <div className="flex items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    </svg>
                                    <span className="text-white">Like Track</span>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-between p-3 hover:bg-[#3e3e3e] hover:bg-opacity-30 rounded-md cursor-pointer"
                            >
                                <div className="flex items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                        <polyline points="16 6 12 2 8 6" />
                                        <line x1="12" y1="2" x2="12" y2="15" />
                                    </svg>
                                    <span className="text-white">Share</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 hover:bg-[#3e3e3e] hover:bg-opacity-30 rounded-md">
                                <div className="flex items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                        <path d="M8.5 8.5v.01" />
                                        <path d="M16 15.5v.01" />
                                        <path d="M12 12v.01" />
                                        <path d="M11 17v.01" />
                                        <path d="M7 14v.01" />
                                    </svg>
                                    <span className="text-white">Ambition Mode</span>
                                </div>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                    <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div>

                            <div
                                className="flex items-center justify-between p-3 hover:bg-[#3e3e3e] hover:bg-opacity-30 rounded-md cursor-pointer"
                                onClick={() => setIsPlaybackDrawerOpen(true)}
                            >
                                <div className="flex items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                    </svg>
                                    <span className="text-white">Playback Settings</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Playback Settings Drawer */}
                <div
                    className={`fixed inset-x-0 bottom-0 bg-[#282828] rounded-t-xl z-[51] transition-transform duration-300 ease-out ${isPlaybackDrawerOpen ? 'translate-y-0' : 'translate-y-full'
                        }`}
                    style={{
                        maxHeight: '70vh',
                    }}
                >
                    {/* Drawer Handle */}
                    <div className="flex justify-center py-2">
                        <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* Playback Drawer Header */}
                    <div className="flex items-center px-4 py-2 border-b border-gray-700">
                        <Button
                            onClick={() => setIsPlaybackDrawerOpen(false)}
                            className="p-2 hover:bg-gray-700 rounded-full transition-colors bg-transparent mr-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </Button>
                        <h3 className="text-white font-bold">Playback Settings</h3>
                    </div>

                    {/* Playback Settings Content */}
                    <div className="px-4 py-2 space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-white">Crossfade</span>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-white">Gapless Playback</span>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-white">Audio Quality</span>
                            <select className="bg-gray-700 text-white rounded px-2 py-1">
                                <option>Auto</option>
                                <option>Low</option>
                                <option>Normal</option>
                                <option>High</option>
                                <option>Very High</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Backdrop overlay when drawer is open */}
                {isDrawerOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                        onClick={() => {setIsDrawerOpen(false); setIsPlaybackDrawerOpen(false)}}
                    />
                )}

            </div>
        </>
    )
}

export default NowPlaying