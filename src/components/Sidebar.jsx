import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isSidebarHidden, toggleSidebar }) {
  const location = useLocation();

  const renderLinkSection = (title, links, alwaysShowIcons = false) => {
    if (isSidebarHidden && !alwaysShowIcons) {
      return null;
    }

    return (
      <div className="mt-2">
        {title && !isSidebarHidden && <h4 className="text-sm font-semibold px-3 py-1">{title}</h4>}
        {links.map((item) => (
          <Link
            key={item.text}
            to={item.path}
            className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition
              ${location.pathname === item.path ? 'bg-gray-200 font-semibold' : ''}
              ${isSidebarHidden ? 'items-end' : ''}`}
            onClick={() => {
              if (window.innerWidth <= 768) {
                toggleSidebar();
              }  
            }}
          >
            <i className="material-icons text-xl mr-3">{item.icon}</i>
            {!isSidebarHidden && <span>{item.text}</span>}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <aside
      className={`md:absolute md:top-0 md:left-0  md:h-[100vh] md:z-20 p-[0 0.7rem 0] bg-white scrollbar-thin  transition-transform duration-300 ease-in-out
        ${isSidebarHidden ? '-translate-x-full md:translate-x-0 md:w-[72px]' : 'translate-x-0 w-[280px]'}`}
    >
      <div className="md:flex">
        <button className="text-xl border-none cursor-pointer h-10 w-10 rounded-[50%] bg-none" onClick={toggleSidebar}>
          <i className="material-icons flex text-[1.5rem] justify-center items-center">menu</i>
        </button>
        <Link to="/" className="flex gap-2 no-underline">
          <img src="/yt_logo_rgb_light.png" alt="Logo" className="w-20 ml-[15px] object-contain" />
        </Link>
      </div>

      <div className="pb-[1rem] pt-[2rem] overflow-y-auto h-[calc(100%-60px)] scrollbar-thin">
        {/* {renderLinkSection(null, [
          { icon: 'home', text: 'Home', path: '/' },
          { icon: 'video_library', text: 'Shorts', path: '/shorts' },
          { icon: 'subscriptions', text: 'Subscriptions', path: '/subscriptions' },
          { icon: 'account_circle', text: 'You', path: '/account' },
        ], true)} */}
        <div className="">
          {renderLinkSection(null, [
          { icon: 'home', text: 'Home', path: '/' },
          { icon: 'video_library', text: 'Shorts', path: '/shorts' },
          { icon: 'subscriptions', text: 'Subscriptions', path: '/subscriptions' },
          { icon: 'account_circle', text: 'You', path: '/account' },
        ], true)}
        </div>

        {!isSidebarHidden && <hr className="my-2" />}
        {renderLinkSection('You', [
          { icon: 'history', text: 'History', path: '/history' },
          { icon: 'playlist_play', text: 'Playlists', path: '/playlists' },
          { icon: 'play_arrow', text: 'Your videos', path: '/your-videos' },
          { icon: 'watch_later', text: 'Watch later', path: '/watch-later' },
          { icon: 'thumb_up', text: 'Liked videos', path: '/liked-videos' },
        ])}

        {!isSidebarHidden && <hr className="my-2" />}
        {renderLinkSection('Explore', [
          { icon: 'local_fire_department', text: 'Trending', path: '/trending' },
          { icon: 'music_note', text: 'Music', path: '/music' },
          { icon: 'sports_esports', text: 'Gaming', path: '/gaming' },
          { icon: 'newspaper', text: 'News', path: '/news' },
          { icon: 'sports', text: 'Sports', path: '/sports' },
        ])}

        {!isSidebarHidden && <hr className="my-2" />}
        {renderLinkSection(null, [
          { icon: 'settings', text: 'Settings', path: '/settings' },
          { icon: 'flag', text: 'Report history', path: '/report' },
          { icon: 'help_outline', text: 'Help', path: '/help' },
          { icon: 'feedback', text: 'Send feedback', path: '/feedback' },
        ])}

        {!isSidebarHidden && (
          <div className="text-xs text-gray-500 mt-4 px-3">
            <p className="mb-2">About Press Copyright Contact us Creators Advertise Developers</p>
            <p className="mb-2">Terms Privacy Policy & Safety How YouTube works Test new features</p>
            <p className="text-gray-400">© 2025 Google LLC</p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;

