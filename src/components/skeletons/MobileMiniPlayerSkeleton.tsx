import React from 'react';

const MobileMiniPlayerSkeleton = () => {
  return (
    <div className="md:hidden fixed bottom-16 left-0 right-0 z-30">
      {/* Main container with skeleton background */}
      <div className="relative w-full bg-[#282828] overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#404040] to-transparent" />
        
        {/* Content wrapper */}
        <div className="relative z-10">
          <div className="flex items-center justify-between p-2 border-b border-[#333333]">
            <div className="flex items-center gap-3 flex-1">
              {/* Album art skeleton */}
              <div className="relative w-10 h-10 bg-[#333333] rounded overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#404040] to-transparent" />
              </div>
              
              <div className="min-w-0 flex-1">
                {/* Track name skeleton */}
                <div className="relative h-4 bg-[#333333] rounded w-3/4 mb-1 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#404040] to-transparent" />
                </div>
                
                {/* Artist name skeleton */}
                <div className="relative h-3 bg-[#333333] rounded w-1/2 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#404040] to-transparent" />
                </div>
              </div>
            </div>
            
            {/* Play button skeleton */}
            <div className="flex items-center gap-4 px-2">
              <div className="relative w-8 h-8 bg-[#333333] rounded-full overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#404040] to-transparent" />
              </div>
            </div>
          </div>
          
          {/* Progress bar skeleton */}
          <div className="relative w-full h-1 bg-[#333333] overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#404040] to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMiniPlayerSkeleton;