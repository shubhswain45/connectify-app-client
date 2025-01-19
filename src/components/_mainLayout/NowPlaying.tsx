import React, { useEffect, useState } from 'react'
import SvgIcon from '../../../public/svgs/SvgIcon'
import Image from 'next/image'
import { useTrackStore } from '@/store/useTrackStore'
import MoreMenu from '../MoreMenu'

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

    // Get a random theme set (each theme set contains 4 colors for more dynamic gradients)
    const gradientThemes = [
        ['#1a1a1a', '#2d2d2d', '#1a1a1a', '#2d2d2d'], // Charcoal
        ['#000000', '#1f1f1f', '#000000', '#1f1f1f'], // Midnight
        ['#161616', '#363636', '#161616', '#363636'], // Smoke
        ['#1a1a2e', '#16213e', '#1a1a2e', '#16213e'], // Deep Ocean
        ['#0d0d0d', '#262626', '#0d0d0d', '#262626'], // Shadow
        ['#1f1f1f', '#2b2b2b', '#1f1f1f', '#2b2b2b']  // Graphite
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

                <MoreMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}/>
                

                {/* Backdrop overlay when drawer is open */}
                

            </div>
        </>
    )
}

export default NowPlaying