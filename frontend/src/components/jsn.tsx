import { Typography } from '@mui/material';
import axios from 'axios';
import { forwardRef, useEffect, useState } from 'react';

interface articleItem {
  id: string;
  text: string;
}

const Jsn = forwardRef<HTMLDivElement>((props, ref) => {
  const [articles, setArticles] = useState<articleItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          'https://winjit-proj.vercel.app/fetch-article'
        );
        setArticles(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
    return () => {};
  }, []);

  // Render the Jsn component
  return (
    <div className="mb-4 h-screen w-screen" ref={ref}>
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          width: '743px',
          height: '208px',
          flexDirection: 'column',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#000',
          fontFamily: '"DM Serif Display"',
          fontSize: '96px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '125%' /* 120px */,
          letterSpacing: '13.44px',
          marginLeft: '25%',
        }}
      >
        JSN Articles
      </Typography>

      {/* Show a loading message if the data is still being fetched */}
      {loading && <p>Loading articles...</p>}
      <div className="bg-slate-50 rounded-2xl mr-5">
        {/* Render articles if data is loaded successfully */}
        {!loading && (
          <ul className="">
            {articles.map((article) => (
              <li key={article.id} className="mb-5 p-5">
                {/* <h2>some title</h2> */}
                <p>{article.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});

export default Jsn;
