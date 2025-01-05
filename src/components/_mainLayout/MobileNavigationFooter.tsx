import { Disc, Home, Library, Search } from 'lucide-react'
import React from 'react'

function MobileNavigationFooter() {
    return (
        <nav className="md:hidden h-16 bg-gray-900 border-t border-gray-800 fixed bottom-0 left-0 right-0 z-30">
            <div className="flex h-full items-center justify-around px-4">
                <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <Home size={20} />
                    <span className="text-xs mt-1">Home</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <Search size={20} />
                    <span className="text-xs mt-1">Search</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <Library size={20} />
                    <span className="text-xs mt-1">Library</span>
                </a>
                <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <Disc size={20} />
                    <span className="text-xs mt-1">Playing</span>
                </a>
            </div>
        </nav>
    )
}

export default MobileNavigationFooter