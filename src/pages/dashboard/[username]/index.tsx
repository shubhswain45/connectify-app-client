import React from 'react';
import { MoreHorizontal, Play, Share2 } from 'lucide-react';
import ProfileHeader from '@/components/_dashboard/_username/ProfileHeader';
import UserActions from '@/components/_dashboard/_username/UserActions';
import UserTracks from '@/components/_dashboard/_username/UserTracks';
import MediaTabs from '@/components/_dashboard/_explore/MediaTabs';

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

const userData: UserData = {
  name: "John Doe",
  username: "@johndoe",
  bio: "🎵 Music enthusiast | Playlist curator | Always exploring new sounds",
  profileImage: "/api/placeholder/200/200",
  followers: 128,
  following: 89,
  topTracks: [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      plays: "2,345,678",
      duration: "5:55",
      imageUrl: "/api/placeholder/48/48",
      date: "Dec 31, 2023",
    },
    {
      id: 2,
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
      plays: "1,987,654",
      duration: "5:56",
      imageUrl: "/api/placeholder/48/48",
      date: "Dec 30, 2023",
    },
    {
      id: 3,
      title: "Hotel California",
      artist: "Eagles",
      album: "Hotel California",
      plays: "1,876,543",
      duration: "6:30",
      imageUrl: "/api/placeholder/48/48",
      date: "Dec 29, 2023",
    },
  ],
};


const UserProfile = () => {
  return (
    <div className="min-h-screen w-full text-white ">
      {/* Profile Header Section */}
      <ProfileHeader userData={userData} />

      {/* Action Buttons */}
      <UserActions />

      {/* Tabs for switching between Tracks and Playlists */}
      <MediaTabs />

      {/* User's Tracks List */}
      <UserTracks />
    </div>
  );
};

export default UserProfile;