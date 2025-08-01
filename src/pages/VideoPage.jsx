// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { videos } from '../data/videos';  
// import VideoCard from '../components/VideoCard';
// import CategoryList from '../components/CategoryList';

// function VideoPage() {
//     // Hook to read query parameters from the URL
//     const [searchParams] = useSearchParams();
//     const videoId = searchParams.get('v'); 
//     const [currentVideo, setCurrentVideo] = useState(null);
//     // State for related videos displayed in the sidebar
//     const [relatedVideos, setRelatedVideos] = useState([]);
//     // State for category filter in related videos sidebar
//     const [activeCategory, setActiveCategory] = useState('all');

//     // Effect to find and set the current video when videoId changes
//     useEffect(() => {
//         const foundVideo = videos.find(v => v.id === videoId);
//         if (foundVideo) {
//             setCurrentVideo(foundVideo);
//             setRelatedVideos(videos.filter(v => v.id !== videoId));
//             setActiveCategory('all'); 
//         } else {
//             console.error('Video not found for ID:', videoId);
//             //redirect to home page if video ID is invalid
//              window.location.href = '/';
//         }
//     }, [videoId]); 
//     useEffect(() => {
//         if (!currentVideo) return; // Ensure current video is loaded before filtering related

//         let filtered = videos.filter(v => v.id !== currentVideo.id); // Always exclude the main video
//         if (activeCategory !== 'all') {
//             filtered = filtered.filter(v => v.category === activeCategory);
//         }
//         setRelatedVideos(filtered);
//     }, [activeCategory, currentVideo]); // Re-run when activeCategory or currentVideo changes

//     // List of categories for the related videos filter
//     const categories = [
//         'all', 'web-design', 'javascript', 'css', 'python', 'gaming', 'music',
//         'netflix', 'node.js', 'data-analysis', 'react.js', 'kdrama', 'html', 'afrobeats'
//     ];

//     // Show a loading message if the video hasn't been found yet
//     if (!currentVideo) {
//         return <div className="flex flex-col gap-[20px] p-[20px] items-center  max-w-[1200px] max-auto w-full">Loading video...</div>;
//     }

//     return (
//         // videopagelyout
//         <div className="flex-none gap-6 flex-row max-w-[900px] p-[20px] ">
//             {/* Main Video Section video player container */}
//             <div className="flex-[3] min-w-[600px]">
//                 <div className="w-full max-w-[900px] flex-none order-[unset] mb-[20px] p-[20px] rounded-[8px] bg-gray-100 overflow-hidden shadow-[0_4px_10px_rgba(0, 0, 0, 0.1)] ">
//                     {/* Video player, key prop forces re-render when videoSrc changes */}
//                     <video controls autoPlay width="100%" height="auto" id="w-full h-[auto] rounded-[6px] bg-black block mb-[15px]" key={currentVideo.videoSrc}>
//                         <source src={currentVideo.videoSrc} type="video/mp4" />
//                     </video>
//                     <h1 id="text-[24px] font-semibold text-gray-800 mb-[10px]">{currentVideo.title}</h1>
//                     <div className="text-[14px] text-gray-500 mb-[15px]">
//                         <span id="video-page-views">{currentVideo.views}</span> • <span id="video-page-upload-time">{currentVideo.uploadTime}</span>
//                     </div>
//                     <div className="flex space-between items-center pb-[15px] mb-[15px]">
//                         <div className="flex gap-[15px]">
//                             <button className="bg-gray-100 border-none rounded-[3.1rem] p-[8px 12px] flex items-center gap-[8px] cursor-pointer text-[0.9rem] font-medium text-black transition-bg duration-200"><i className="material-icons">thumb_up</i> <span id="likes-count">{currentVideo.likes}</span></button>
//                             <button className="bg-gray-100 border-none rounded-[3.1rem] p-[8px 12px] flex items-center gap-[8px] cursor-pointer text-[0.9rem] font-medium text-black"><i className="material-icons">thumb_down</i> <span id="dislikes-count">{currentVideo.dislikes}</span></button>
//                             <button className="bg-gray-100 border-none rounded-[3.1rem] p-[8px 12px] flex items-center gap-[8px] cursor-pointer text-[0.9rem] font-medium text-black"><i className="material-icons">share</i> Share</button>
//                             <button className="bg-gray-100 border-none rounded-[3.1rem] p-[8px 12px] flex items-center gap-[8px] cursor-pointer text-[14px] font-semibold text-black"><i className="material-icons">download</i> Download</button>
//                         </div>
//                     </div>
//                     <div className="flex items-center pb-[1.5rem] mt-[1.5rem]">
//                         <img src={currentVideo.channelLogo} alt="Channel Logo" className="w-[48px] h-[48px] rounded-[50%] object-cover mr-[12px]" id="video-page-channel-logo" />
//                         <div className="flex-grow">
//                             <p id="video-page-channel" className="text-[16px]font-semibold text-black m-0 ">{currentVideo.channelName}</p>
//                             <span id="channel-subscribers" className="text-[13px] text-gray-500">{currentVideo.subscribers}</span>
//                         </div>
//                         <button className="bg-black text-white border-none rounded-[3.1rem] p-[10px 16px] text-[1rem] font-medium cursor-pointer">Subscribe</button>
//                     </div>
//                 </div>

//                 <div className="bg-white rounded-[8px] p-[20px] mb-[20px]">
//                     <h3>Description</h3>
//                     <p id="font-gray-600 text-[18px]mb-[10px] text-black">{currentVideo.description}</p>
//                 </div>

//                 {/* Comments Section*/}
//                 <div className="bg-white rounded-[8px] p-[20px] mb-[20px]">
//                     <div className="font-semibold text-[20px] mb-[20px] text-black">
//                     <h2>Comments</h2>
//                     </div>
//                     <div className="flex items-center mb-[20px] gap-[10px]">
//                         <img src="/Fatima.jpg" alt="User Avatar" className="w-[36px] h-[36px] rounded-full object-fit-cover" />
//                         <input type="text" placeholder="Add a comment..." className="flex-grow border-none border-bottom-[1px solid #ccc] p-[8px 0] text-[14px] outline-none" />
//                         <button className="bg-black text-white border-none rounded-[4px] p-[8px 16px] text-[14px] font-[500] cursor-pointer transition-bg-color duration 200">Comment</button>
//                     </div>
//                     <div id="comments-list" className="mt-[20px]">
//                         <div className="flex mb-[20px] gap-[10px]">
//                             <img src="/web.jpg" alt="" className="comment-avatar" />
//                             <div className="flex-grow">
//                                 <p className="text-[13px] font-[500] text-black mb-[4px]">@teemerh <span className="comment-time">2 days ago</span></p>
//                                 <p className="comment-text">Great video! Very helpful.</p>
//                             </div>
//                         </div>
//                         <div className="comment-item">
//                             <img src="https://via.placeholder.com/36x36?text=U2" alt="User 2" className="comment-avatar" />
//                             <div className="comment-content">
//                                 <p className="comment-author">User 2 <span className="comment-time">1 day ago</span></p>
//                                 <p className="font-medium text-[#333] ">Loved the explanation, keep up the good work!</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Related Videos Sidebar */}
//             <div className="flex-[1] min-w-[300px]">
//                 {/* Category filter for related videos */}
//                 <CategoryList
//                     categories={categories}
//                     activeCategory={activeCategory}
//                     onSelectCategory={setActiveCategory}
//                     isVideoPage={true} 
//                 />
//                 <div className="grid-cols-[1fr] gap-[15px] grid">
//                     {relatedVideos.map(relVideo => (
//                         <VideoCard key={relVideo.id} video={relVideo} isRelatedVideo={true} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default VideoPage;
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { videos } from '../data/videos';
import VideoCard from '../components/VideoCard';
import CategoryList from '../components/CategoryList';

function VideoPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const foundVideo = videos.find(v => v.id === videoId);
    if (foundVideo) {
      setCurrentVideo(foundVideo);
      setRelatedVideos(videos.filter(v => v.id !== videoId));
      setActiveCategory('all');
    } else {
      console.error('Video not found for ID:', videoId);
      window.location.href = '/';
    }
  }, [videoId]);

  useEffect(() => {
    if (!currentVideo) return;

    let filtered = videos.filter(v => v.id !== currentVideo.id);
    if (activeCategory !== 'all') {
      filtered = filtered.filter(v => v.category === activeCategory);
    }
    setRelatedVideos(filtered);
  }, [activeCategory, currentVideo]);

  const categories = [
    'all', 'web-design', 'javascript', 'css', 'python', 'gaming', 'music',
    'netflix', 'node.js', 'data-analysis', 'react.js', 'kdrama', 'html', 'afrobeats'
  ];

  if (!currentVideo) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:flex-row md:items-start">
      <div className="flex-[3] min-w-[600px] max-w-full">
        <div className="bg-white p-4 rounded-lg shadow">
          <video
            controls
            autoPlay
            className="w-full rounded-md mb-4"
            key={currentVideo.videoSrc}
          >
            <source src={currentVideo.videoSrc} type="video/mp4" />
          </video>
          <h1 className="text-xl font-bold text-black mb-1">{currentVideo.title}</h1>
          <div className="text-sm text-gray-600 mb-4">
            {currentVideo.views} • {currentVideo.uploadTime}
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
            <div className="flex gap-2 flex-wrap">
              <button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <i className="material-icons text-base">thumb_up</i> {currentVideo.likes}
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <i className="material-icons text-base">thumb_down</i> {currentVideo.dislikes}
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <i className="material-icons text-base">share</i> Share
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <i className="material-icons text-base">download</i> Download
              </button>
            </div>
          </div>

          <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
            <img src={currentVideo.channelLogo} alt="Channel" className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-grow">
              <p className="font-semibold text-base text-black">{currentVideo.channelName}</p>
              <p className="text-sm text-gray-500">{currentVideo.subscribers}</p>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full font-semibold text-sm">
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-white p-4 mt-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{currentVideo.description}</p>
        </div>

        <div className="bg-white p-4 mt-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Comments</h2>
          <div className="flex items-center gap-3 mb-4">
            <img src="/Fatima.jpg" alt="User Avatar" className="w-9 h-9 rounded-full object-cover" />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-grow border-b border-gray-300 focus:outline-none py-1 text-sm"
            />
            <button className="text-sm font-medium px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
              Comment
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <img src="/web.jpg" alt="" className="w-9 h-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-black">
                  @teemerh <span className="text-gray-500 font-normal ml-2">2 days ago</span>
                </p>
                <p className="text-sm text-gray-800">Great video! Very helpful.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="https://via.placeholder.com/36x36?text=U2" alt="User 2" className="w-9 h-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-black">
                  User 2 <span className="text-gray-500 font-normal ml-2">1 day ago</span>
                </p>
                <p className="text-sm text-gray-800">Loved the explanation, keep up the good work!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="flex-1 w-full max-w-sm sticky top-[5.5rem] h-[calc(100vh-6rem)]">
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          isVideoPage={true}
        />
        <div className="grid gap-3">
          {relatedVideos.map(relVideo => (
            <VideoCard key={relVideo.id} video={relVideo} isRelatedVideo={true} />
          ))}
        </div>
      </aside>
    </div>
  );
}

export default VideoPage;
