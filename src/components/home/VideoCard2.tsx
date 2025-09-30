import { cn } from '@/lib/utils';

type Video = {
  name?: string;
  link: string;
  title: string;
};

type VideoCardProps = {
  video: Video;
};

const VideoCard2 = ({ video }: VideoCardProps) => {
  return (
    <div
      key={video.title}
      tabIndex={0} // 👈 make focusable
      className={cn(
        'relative min-w-52 md:w-sm lg:w-sm group aspect-[9/11] sm:aspect-[9/12] rounded-3xl sm:rounded-lg overflow-hidden shadow-lg'
      )}
    >
      <video
        src={video.link}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        autoPlay
      />
    </div>
  );
};

export default VideoCard2;
