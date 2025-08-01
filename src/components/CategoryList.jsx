import React from 'react';

function CategoryList({ categories, activeCategory, onSelectCategory, isVideoPage = false }) {
  return (
    <div className={`flex sticky top-0 gap-2 overflow-x-auto py-2 px-2 scrollbar-hide ${isVideoPage ? 'mb-5' : ''}`}>
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            className={`whitespace-nowrap px-3 py-1 rounded-md font-medium text-sm transition-colors 
              ${isActive
                ? 'bg-black text-white pointer-events-none'
                : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
            onClick={() => onSelectCategory(category)}
          >
            {category === 'all'
              ? 'All'
              : category
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ')}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;
