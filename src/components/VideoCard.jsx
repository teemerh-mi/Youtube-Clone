// import React from 'react';
// import { Link } from 'react-router-dom';

// function VideoCard({ video, isRelatedVideo = false }) {
//   return (
//     <Link
//      to={`/watch?v=${video.id}`}
//      className={`block text-primary-text rounded-lg overflow-hidden transition-colors hover:bg-gray-100
//         ${isRelatedVideo ? 'flex items-start mb-3' : ''}`}
//     >
//       <img
//         src={video.thumbnail}
//         alt={video.title}
//         className={`w-full rounded-lg aspect-video ${isRelatedVideo ? 'w-40 mr-3' : ''}`}
//       />
//       <div className={`flex p-2 ${isRelatedVideo ? 'flex-col' : ''}`}>
//         {!isRelatedVideo && (
//           <img
//             src={video.channelLogo}
//             alt="Channel Logo"
//             className="w-9 h-9 rounded-full mr-3 flex-shrink-0"
//           />
//         )}
//         <div className="flex-1">
//           <h3 className="text-base font-semibold text-primary-text line-clamp-2 mb-1">{video.title}</h3>
//           <p className="text-sm text-secondary-text mb-0.5">{video.channelName}</p>
//           <p className="text-sm text-secondary-text">{video.views} • {video.uploadTime}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default VideoCard;
import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ video, isRelatedVideo = false }) {
  return (
    <Link
      to={`/watch?v=${video.id}`}
      className={`block overflow-hidden rounded-lg transition hover:bg-gray-100 
        ${isRelatedVideo ? 'flex items-start gap-3' : ''}`}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className={`w-full aspect-video rounded-lg object-cover 
          ${isRelatedVideo ? 'w-40 h-auto flex-shrink-0' : ''}`}
      />
      <div className={`p-2 ${isRelatedVideo ? 'p-0' : ''}`}>
        <h3 className="text-sm font-semibold line-clamp-2 text-black">{video.title}</h3>
        <p className="text-sm text-gray-600">{video.channelName}</p>
        <p className="text-sm text-gray-500">{video.views} • {video.uploadTime}</p>
      </div>
    </Link>
  );
}

export default VideoCard;
