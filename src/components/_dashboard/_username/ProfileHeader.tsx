import React from 'react'
interface TopTrack {
    id: number;
    title: string;
    artist: string;
    album: string;
    plays: string;
    duration: string;
    imageUrl: string;
    date: string;
}

interface UserData {
    name: string;
    username: string;
    bio: string;
    profileImage: string;
    followers: number;
    following: number;
    topTracks: TopTrack[];
}

function ProfileHeader({ userData }: { userData: UserData }) {
    return (
        <div className="px-4 md:px-8 pt-16 pb-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src={userData.profileImage}
                        alt={userData.name}
                        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full shadow-2xl"
                    />
                </div>

                {/* Profile Info */}
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-sm text-gray-300 mb-2">Profile</span>
                    <h1 className="text-3xl md:text-7xl font-bold mb-2 md:mb-4">{userData.name}</h1>
                    <div className="text-gray-300 mb-2">{userData.username}</div>
                    <p className="text-gray-400 mb-4 max-w-2xl text-center md:text-left">{userData.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                        <span>{userData.followers} Followers</span>
                        <span>•</span>
                        <span>{userData.following} Following</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader