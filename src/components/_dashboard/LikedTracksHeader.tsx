import Link from "next/link"

const LikedTracksHeader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
      <Link href={"/dashboard/liked"}>
        <button
          className="relative group flex items-center rounded-md overflow-hidden gap-x-4
        bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
          <div className="relative min-w-[64px] min-h-[64px] bg-blue-200 rounded-md flex justify-center items-center">
            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <p className="font-medium truncate py-5">Liked Tracks</p>
          <div
            className="absolute transition opacity-0 rounded-full flex justify-center items-center
          bg-green-500 p-3 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </Link>
    </div>
  )
}

export default LikedTracksHeader
