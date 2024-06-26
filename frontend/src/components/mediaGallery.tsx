import { useEffect, useState } from 'react';
import axios from 'axios';

interface MediaItem {
  id: string;
  alt: string;
  filename: string;
  createdAt: string;
  imageUrl: string;
}

const MediaGallery = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(
          'https://winjit-proj.vercel.app/fetch-media'
        );
        setMedia(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.message);
        }
      }
    };

    fetchMedia();
  }, []);

  const getImageUrl = (imageUrl: string) => {
    return `https://winjit-proj.vercel.app${imageUrl}`;
  };

  return (
    <div className="py-6 ml-6 mt-5 bg-slate-50 bg-opacity-85 rounded-3xl shadow-md">
      <div className="grid grid-cols-3 gap-6 p-5">
        {media.map((item) => (
          <div key={item.id} className="relative overflow-hidden rounded-lg">
            <img
              src={getImageUrl(item.imageUrl)}
              alt={item.alt}
              className="w-full h-auto transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MediaGallery;
