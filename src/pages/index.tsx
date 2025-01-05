import MainLayout from '@/components/Layouts/MainLayout'
import React from 'react'

function index() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="space-y-6">
        {/* Recently Played Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Good afternoon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-800/50 hover:bg-gray-800 transition-colors group flex items-center gap-4 rounded-md overflow-hidden cursor-pointer"
              >
                <div className="w-20 h-20 bg-gray-700 flex-shrink-0" />
                <span className="font-semibold text-white">Playlist {i + 1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Made For You Section */}
        <section className="pt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Made for you</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-800/40 hover:bg-gray-800/60 transition-all p-4 rounded-lg cursor-pointer group"
              >
                <div className="aspect-square bg-gray-700 mb-4 rounded-md" />
                <h3 className="text-white font-semibold">Daily Mix {i + 1}</h3>
                <p className="text-sm text-gray-400">Custom playlist for you</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recently Played */}
        <section className="pt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Recently played</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-800/40 hover:bg-gray-800/60 transition-all p-4 rounded-lg cursor-pointer"
              >
                <div className="aspect-square bg-gray-700 mb-4 rounded-md" />
                <h3 className="text-white font-semibold">Album Title {i + 1}</h3>
                <p className="text-sm text-gray-400">Artist Name</p>
              </div>
            ))}
          </div>
        </section>

        {/* Your Top Mixes */}
        <section className="pt-8 pb-24">
          <h2 className="text-2xl font-bold text-white mb-4">Your top mixes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-800/40 hover:bg-gray-800/60 transition-all p-4 rounded-lg cursor-pointer"
              >
                <div className="aspect-square bg-gray-700 mb-4 rounded-md" />
                <h3 className="text-white font-semibold">Mix {i + 1}</h3>
                <p className="text-sm text-gray-400">Based on your listening</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default index