import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <header className="bg-black/95 h-16 flex items-center justify-between px-4 md:px-8 fixed top-0 left-0 right-0 z-40">
            <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-2">
                    <button className="rounded-full bg-gray-900 p-2">
                        <ChevronLeft size={20} className="text-gray-400" />
                    </button>
                    <button className="rounded-full bg-gray-900 p-2">
                        <ChevronRight size={20} className="text-gray-400" />
                    </button>
                </div>
                <h1 className="text-white font-bold md:hidden">Good morning</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
                <button className="text-gray-400 hover:text-white px-2 md:px-4 py-2 text-sm font-semibold">
                    Sign up
                </button>
                <button className="bg-white text-black px-4 md:px-8 py-2 rounded-full text-sm font-semibold">
                    Log in
                </button>
            </div>
        </header>
    )
}

export default Header