import React from 'react'
import SvgIcon from '../../../public/svgs/SvgIcon'


function DesktopPlaybackFooter() {
    return (
        <footer
            className="hidden md:flex h-20 bg-[#000000] px-4 items-center justify-between fixed bottom-0 left-0 right-0 cursor-pointer z-30"
        >
            <div className="flex items-center gap-4 w-1/3">
                <div className="w-14 h-14 bg-gray-800 rounded"></div>
                <div>
                    <p className="text-sm font-semibold text-white">Song Title</p>
                    <p className="text-xs text-gray-400">Artist</p>
                </div>
                <SvgIcon name='Heart' />
            </div>

            <div className="flex flex-col items-center gap-2 w-1/3">
                <div className="flex items-center gap-6">
                    <SvgIcon name='SkipBack' />
                    <SvgIcon name='Prev' />

                    <button
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105"
                    >
                        <SvgIcon name='Play' />
                    </button>
                    <SvgIcon name='Next' />
                    <SvgIcon name='SkipForward' />

                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full">
                    <div className="w-1/3 h-full bg-white hover:bg-green-500 rounded-full"></div>
                </div>
            </div>

            <div className="flex items-center gap-4 w-1/3 justify-end">
                <SvgIcon name='ListTrack' />
                <SvgIcon name='Repeat' />
                <div className="flex items-center gap-2">
                    <SvgIcon name='Volume' />

                    <div className="w-24 h-1 bg-gray-800 rounded-full">
                        <div className="w-1/2 h-full bg-white hover:bg-green-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default DesktopPlaybackFooter