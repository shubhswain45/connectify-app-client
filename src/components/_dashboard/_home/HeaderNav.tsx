import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HeaderNav = () => {
    const activeTab = usePathname()

    const tabs = [
        { id: 'all', label: 'Tracks', link: '/dashboard/explore' },
        { id: 'music', label: 'Playlists', link: '/dashboard/explore/playlists' },
    ];

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex gap-1 sm:gap-2 p-0 min-w-max">
                {tabs.map(tab => (
                    <Link href={tab.link}>
                        <button
                            key={tab.id}
                            className={`
                            px-3 sm:px-4 py-1.5 sm:py-2 
                            rounded-full 
                            text-xs sm:text-sm 
                            font-medium 
                            transition-colors
                            whitespace-nowrap
                            ${activeTab === tab.link
                                    ? 'bg-white text-black'
                                    : 'text-white bg-neutral-100/10 hover:bg-neutral-100/20'
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HeaderNav;