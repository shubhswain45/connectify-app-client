import { X } from 'lucide-react'
import React, { useState } from 'react'

function ShowBanner() {
    const [showBanner, setShowBanner] = useState(true)

    return (
        <>
            {showBanner && (
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white relative">
                    {/* Container with responsive padding */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                        {/* Flex container with improved responsive layout */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                            {/* Text content with responsive sizing */}
                            <div className="flex-1 pr-8 sm:pr-4">
                                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 pr-6 sm:pr-0">
                                    Congratulations on Your First Week with Connectify! 🎉
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base opacity-90 line-clamp-2 sm:line-clamp-1">
                                    Thank you for being part of our musical journey. We're excited to have you here!
                                    Explore millions of tracks and create your perfect playlists.
                                </p>
                            </div>

                            {/* Close button with responsive positioning */}
                            <button
                                onClick={() => setShowBanner(false)}
                                className="absolute right-2 top-2 sm:relative sm:right-0 sm:top-0 p-1.5 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close banner"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Add subtle bottom shadow */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
            )}
        </>
    )
}

export default ShowBanner