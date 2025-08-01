// import React, { useState, useEffect } from 'react';
// import { videos } from '../data/videos';
// import CategoryList from '../components/CategoryList';
// import VideoCard from '../components/VideoCard';

// function Home() {
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [filteredVideos, setFilteredVideos] = useState([]);

//   useEffect(() => {
//     if (activeCategory === 'all') {
//       setFilteredVideos(videos);
//     } else {
//       setFilteredVideos(videos.filter(video => video.category === activeCategory));
//     }
//   }, [activeCategory]);

//   const categories = [
//     'all', 'website', 'css', 'javascript', 'html', 'music', 'coding',
//     'data-analysis', 'netflix', 'node.js', 'python', 'web-design',
//     'express.js', 'movie', 'gaming', 'react.js', 'kdrama',
//     'computer-programming', 'afrobeats'
//   ];

//   return (
//     <div className="flex-grow px-4 overflow-x-hidden min-w-0 ">
//       <CategoryList
//         categories={categories}
//         activeCategory={activeCategory}
//         onSelectCategory={setActiveCategory}
//       />
//       <div className="grid gap-4 py-5 pb-16 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] left[80]">
//         {filteredVideos.map(video => (
//           <VideoCard key={video.id} video={video} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import { videos } from '../data/videos';
import CategoryList from '../components/CategoryList';
import VideoCard from '../components/VideoCard';

function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(video => video.category === activeCategory));
    }
  }, [activeCategory]);

  const categories = [
    'all', 'website', 'css', 'javascript', 'html', 'music', 'coding',
    'data-analysis', 'netflix', 'node.js', 'python', 'web-design',
    'express.js', 'movie', 'gaming', 'react.js', 'kdrama',
    'computer-programming', 'afrobeats'
  ];

  return (
    <div className="pl-[1rem] overflow-auto overflow-x-hidden w-full">
      <CategoryList
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <div className="grid gap-4 pt-5 pb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Home;

