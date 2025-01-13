import React, { useState, useRef, useEffect } from 'react';
import { Search, User, Home, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/auth';

const Header = () => {
  const {data} = useCurrentUser()
  const [isLoggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  console.log("data", data);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#000000] h-16 flex items-center justify-between px-4 md:px-8 fixed top-0 left-0 right-0 z-40">
      {/* Left side - Logo for larger screens, Good morning for small screens */}
      <div className="flex items-center">
        <div className="hidden sm:block">
          <svg viewBox="0 0 1134 340" className="h-[35px] text-white">
            <path
              fill="currentColor"
              d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
            />
          </svg>
        </div>
        <div className="sm:hidden text-white font-bold">
          Good morning
        </div>
      </div>

      {/* Center - Navigation and Search - Only visible on desktop */}
      <div className="hidden sm:block absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#242424] hover:bg-[#2a2a2a] transition-colors group">
            <Home className="h-5 w-5 text-white/70 group-hover:text-white" />
          </button>
          <div className="relative w-[364px]">
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="w-full bg-[#242424] text-white rounded-full py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Right side - Auth buttons or User icon */}
      <div className="flex items-center gap-2 justify-end">
        {isLoggedIn ? (
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-8 h-8 rounded-full bg-[#282828] flex items-center justify-center hover:bg-[#3E3E3E] transition-colors"
            >
              <User className="h-4 w-4 text-white" />
            </button>

            {/* Dropdown Menu with slower animation */}
            <div
              ref={dropdownRef}
              className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#282828] ring-1 ring-black ring-opacity-5 origin-top transform transition-all duration-300 ease-in-out ${isDropdownOpen
                  ? 'opacity-100 scale-y-100'
                  : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
            >
              <div className="py-1">
                <Link href="/dashboard/shubh" className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#3E3E3E] gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
                  Profile
                </Link>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#3E3E3E] gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#3E3E3E] gap-2">
                  <LogOut className="h-4 w-4" />
                  Log out
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button className="text-white/70 hover:text-white hover:scale-105 px-3 py-2 text-[15px] font-bold transition-all sm:block">
              Sign up
            </button>
            <button className="bg-white hover:scale-105 text-black px-4 sm:px-8 py-2 rounded-full text-[15px] font-bold transition-all">
              Log in
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;