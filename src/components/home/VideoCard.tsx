import { cn } from '@/lib/utils';
import Button from '../ui/Button';
import { Pause, Play, Volume2, VolumeOff } from 'lucide-react';
import { useRef, useState } from 'react';

type Video = {
  name?: string;
  link: string;
  title: string;
};

type VideoCardProps = {
  video: Video;
};

const VideoCard = ({ video }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasFocus, setHasFocus] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    setHasFocus(true);
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    setHasFocus(true);
    setIsMuted((prev) => !prev);
  };

  const handleEnter = () => {
    if (!videoRef.current || hasFocus) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
    setIsMuted(true);
    setHasFocus(false);
  };

  return (
    <div
      key={video.title}
      tabIndex={0} // 👈 make focusable
      className={cn(
        'relative w-[80vw] md:w-sm lg:w-60 group aspect-[9/12] rounded-lg overflow-hidden shadow-lg',
        // base transforms
        'rotate-12 duration-400 ease-out transition-all hover:scale-120 hover:rotate-0 hover:z-10 focus:scale-120 focus:rotate-0 focus:z-10 focus:ring-0',
        // positional rotation rules
        'first:rotate-3 nth-[2]:-rotate-2 nth-[2]:hover:rotate-0 nth-[2]:focus:rotate-0 nth-[3]:-rotate-4 nth-[3]:hover:rotate-0 nth-[3]:focus:rotate-0 nth-[4]:rotate-4 nth-[4]:hover:rotate-0 nth-[4]:focus:rotate-0 last:-rotate-3',
        'focus:ring-0 focus-visible:ring-0 focus:outline-none focus:border-0'
      )}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <video
        ref={videoRef}
        src={video.link}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
      />

      {/* Controls */}
      <div
        className={cn(
          'absolute top-6 right-4 space-y-2 opacity-0 translate-x-6 translate-y-2',
          'transition-all duration-300 delay-150',
          // 👇 show on hover OR focus
          'group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0',
          'group-focus:opacity-100 group-focus:translate-x-0 group-focus:translate-y-0'
        )}
      >
        {/* Play / Pause */}
        <Button
          className="bg-black/30 p-2"
          variant="icon"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <Pause className="stroke-white size-3 fill-white" />
          ) : (
            <Play className="stroke-white size-3 fill-white" />
          )}
        </Button>

        {/* Mute / Unmute */}
        <Button
          className="bg-black/30 p-2"
          variant="icon"
          onClick={handleMuteToggle}
        >
          {isMuted ? (
            <Volume2 className="stroke-white stroke-3 size-3" />
          ) : (
            <VolumeOff className="stroke-white stroke-3 size-3" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
