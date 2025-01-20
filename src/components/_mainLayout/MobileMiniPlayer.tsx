import React, { useEffect, useRef, useState } from 'react'
import NowPlaying from './NowPlaying';
import { useTrackStore } from '@/store/useTrackStore';

function MobileMiniPlayer() {
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState("0:00");
    const { trackDetails, setTrackDetails, togglePlay } = useTrackStore();
    const [currentTime, setCurrentTime] = useState("0:00")
    const [volume, setVolume] = useState(0.5)

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlayer = () => {
        setIsPlayerOpen(!isPlayerOpen);
    };

    const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const progressBar = event.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = event.clientX - rect.left;
        const newProgress = (clickPosition / rect.width) * 100;

        // Ensure progress stays within bounds
        const boundedProgress = Math.max(0, Math.min(100, newProgress));

        // Set the new current time
        const newTime = (boundedProgress / 100) * audio.duration;
        audio.currentTime = newTime;

        // Update progress state
        setProgress(boundedProgress);
    };

    // Handle 10 second skip forward/backward
    const handleSkip = (direction: 'forward' | 'backward') => {
        const audio = audioRef.current;
        if (!audio) return;

        const skipAmount = 10; // seconds
        const currentTime = audio.currentTime;
        const newTime = direction === 'forward'
            ? Math.min(currentTime + skipAmount, audio.duration)
            : Math.max(currentTime - skipAmount, 0);

        // Update audio time
        audio.currentTime = newTime;
    };

    const handleVolumeChange = (event: React.MouseEvent<HTMLDivElement>) => {
        const slider = event.currentTarget;
        const rect = slider.getBoundingClientRect();
        const clickPosition = event.clientX - rect.left;
        const newVolume = clickPosition / rect.width;
    
        // Ensure volume stays within the bounds of 0 to 1
        const boundedVolume = Math.max(0, Math.min(1, newVolume));
    
        // Update the audio volume
        if (audioRef.current) {
            audioRef.current.volume = boundedVolume;
        }
    
        // Update the state
        setVolume(boundedVolume);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !trackDetails.audioFileUrl) return;

        if ((trackDetails.isPlaying && audio.paused)) {
            audio.play();
        } else if (!trackDetails.isPlaying && !audio.paused) {
            audio.pause();
        }
    }, [trackDetails, trackDetails.isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !trackDetails.audioFileUrl) return;

        // Handle browser media control events
        const handlePlay = () => {
            if (!trackDetails.isPlaying) {
                setTrackDetails({ isPlaying: true })
            }
        };

        const handlePause = () => {
            if (trackDetails.isPlaying) {
                setTrackDetails({ isPlaying: false })
            }
        };

        // Format time helper function
        const formatTime = (seconds: number) => {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        };

        const handleTimeUpdate = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
            setCurrentTime(formatTime(audio.currentTime));
        };

        const handleDurationChange = () => {
            setDuration(formatTime(audio.duration));
        };


        // Attach event listeners
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('durationchange', handleDurationChange);

        return () => {
            // Clean up event listeners
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('durationchange', handleDurationChange);
        };
    }, [trackDetails, trackDetails.isPlaying, trackDetails.audioFileUrl]);

    return (
        <>
            <div
                className="md:hidden fixed bottom-16 left-0 right-0 bg-[#610000] z-30 cursor-pointer"
                onClick={togglePlayer}
            >
                <div className="flex items-center justify-between p-2 border-b border-gray-700">
                    <div className="flex items-center gap-3 flex-1">
                        {trackDetails.coverImageUrl ? (
                            <img
                                src={trackDetails.coverImageUrl}
                                alt={trackDetails.title}
                                className="w-10 h-10 rounded object-cover"
                            />
                        ) : (
                            <div className="w-10 h-10 bg-gray-700 rounded"></div>
                        )}
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-white truncate">
                                {trackDetails.title || 'Untitled Track'}
                            </p>
                            <p className="text-xs text-gray-400 truncate">
                                {trackDetails.artist || 'Unknown Artist'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 px-2">
                        <button
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            onClick={(e) => {
                                e.stopPropagation()
                                togglePlay()
                            }}
                        >
                            {
                                trackDetails.isPlaying ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                    >
                                        <rect x="6" y="4" width="4" height="16" rx="1" />
                                        <rect x="14" y="4" width="4" height="16" rx="1" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                    >
                                        <path d="M8 5v14l11-7L8 5z" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div
                    className="w-full h-1 bg-gray-700 relative cursor-pointer"
                >
                    <div
                        className="h-full bg-white transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
            {
                trackDetails && (
                    <audio ref={audioRef} src={trackDetails.audioFileUrl} />
                )
            }

            <NowPlaying isPlayerOpen={isPlayerOpen} togglePlayer={togglePlayer} currentTime={currentTime} duration={duration} progress={progress} handleSeek={handleSeek} handleSkip={handleSkip} volume={volume} handleVolumeChange={handleVolumeChange} />

        </>
    )
}  

export default MobileMiniPlayer;