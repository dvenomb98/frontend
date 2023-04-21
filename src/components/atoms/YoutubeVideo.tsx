import { Skeleton } from '@mui/material';
import React, { FC, useState } from 'react';

interface YoutubeVideoProps {
  videoUrl: string;
}

const YoutubeVideo: FC<YoutubeVideoProps> = ({ videoUrl }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="sm:h-[300px] h-[400px] sm:w-full lg:w-[600px] mx-auto rounded-md overflow-hidden relative">
      <iframe
        className="w-full h-full object-cover"
        onLoad={() => setLoading(false)}
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
      {loading && (
        <Skeleton
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: loading ? 'block' : 'none',
          }}
        />
      )}
    </div>
  );
};

export default YoutubeVideo;
