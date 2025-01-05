import React, { useState } from 'react'
import SvgIcon from '../../../public/svgs/SvgIcon'
import Button from '../ui/Button'
import Image from 'next/image'

function NowPlaying({ isPlayerOpen, togglePlayer }: { isPlayerOpen: boolean, togglePlayer: () => void }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <div
            className={`fixed inset-0 bg-[#610000] z-50 transition-transform duration-500 ease-in-out ${isPlayerOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="h-full overflow-y-auto">
                <div className="min-h-full flex flex-col px-4 md:px-8 py-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <Button
                            onClick={togglePlayer}
                            className="p-2 hover:bg-gray-700 rounded-full transition-colors bg-transparent"
                        >
                            <SvgIcon name='DownArrow' />
                        </Button>
                        <h2 className="text-white text-sm font-bold">Now Playing</h2>
                        <Button className="p-2 hover:bg-gray-700 rounded-full transition-colors bg-transparent" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                            <SvgIcon name='More' />
                        </Button>
                    </div>

                    {/* Album Art */}
                    {/* <div className="aspect-square w-full max-w-[400px] mx-auto mb-6">
                        <div className="w-full h-full bg-gray-800 rounded-md shadow-2xl">
                            <Image
                                src={"https://c.saavncdn.com/415/Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg"}
                                width={ }
                                height={ }
                            />
                        </div>
                    </div> */}


                    <div className="aspect-square w-full max-w-[400px] mx-auto mb-6">
                        <div className="w-full h-full bg-gray-800 rounded-md shadow-2xl">
                            <Image
                                src="https://c.saavncdn.com/415/Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg"
                                width={500}  // Image width
                                height={500} // Image height
                                alt="Satranga from ANIMAL"
                                className="object-cover rounded-md"
                            />
                        </div>
                    </div>
                    {/* Track Info - Closer to album art */}
                    <div className="mb-5">
                        <div className="flex flex-col items-start md:items-center">
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-1">Song Title</h3>
                            <p className="text-gray-400 text-sm md:text-base">Artist Name</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                        <div className="w-full h-1 bg-gray-800 rounded-full mb-2">
                            <div className="w-1/3 h-full bg-white hover:bg-green-500 rounded-full cursor-pointer"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                            <span>1:23</span>
                            <span>3:45</span>
                        </div>
                    </div>

                    {/* Controls - Closer to progress bar */}
                    <div className="flex flex-col items-center gap-6">
                        {/* Main Controls */}
                        <div className="flex items-center justify-center w-full max-w-md gap-6">
                            <Button className="text-white bg-transparent hover:bg-transparent hover:scale-110">
                                <SvgIcon name='SkipBack' />
                            </Button>

                            <Button className="text-white bg-transparent hover:bg-transparent hover:scale-110">
                                <SvgIcon name='Prev' />
                            </Button>

                            <Button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-105 hover:bg-white">
                                <SvgIcon name='Play' />
                            </Button>

                            <Button className="text-white bg-transparent hover:bg-transparent hover:scale-110">
                                <SvgIcon name='Next' />
                            </Button>

                            <Button className="text-white bg-transparent hover:bg-transparent hover:scale-110">
                                <SvgIcon name='SkipForward' />
                            </Button>

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
                className={`fixed inset-x-0 bottom-0 bg-gray-800 rounded-t-xl z-50 transition-transform duration-300 ease-out ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}
                style={{
                    maxHeight: '70vh',
                }}
            >
                {/* Drawer Handle */}
                <div className="flex justify-center py-2">
                    <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                </div>

                {/* Drawer Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                    <h3 className="text-white font-bold">Queue</h3>
                    <Button
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 hover:bg-gray-700 rounded-full transition-colors bg-transparent"
                    >
                        <SvgIcon name='DownArrow' />
                    </Button>
                </div>

                {/* Drawer Content */}
                <div className="overflow-y-auto" style={{ maxHeight: 'calc(70vh - 80px)' }}>
                    <div className="px-4 py-2">
                        <p className="text-gray-400 text-sm font-bold mb-4">Now Playing</p>
                        <div className="flex items-center space-x-3 p-2 bg-gray-700 bg-opacity-30 rounded-md">
                            <div className="w-12 h-12 bg-gray-700 flex-shrink-0 rounded"></div>
                            <div className="flex-1">
                                <p className="text-white font-medium">Current Song</p>
                                <p className="text-gray-400 text-sm">Current Artist</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm font-bold mt-6 mb-4">Next in queue</p>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="flex items-center space-x-3 p-2 hover:bg-gray-700 hover:bg-opacity-30 rounded-md cursor-pointer">
                                <div className="w-12 h-12 bg-gray-700 flex-shrink-0 rounded"></div>
                                <div className="flex-1">
                                    <p className="text-white font-medium">Song {item}</p>
                                    <p className="text-gray-400 text-sm">Artist {item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Backdrop overlay when drawer is open */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}

        </div>
    )
}

export default NowPlaying