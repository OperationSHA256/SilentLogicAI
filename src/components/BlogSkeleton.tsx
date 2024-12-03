import React from 'react';

export default function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse h-[280px]"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div className="h-20 bg-gray-200 rounded mb-4 flex-grow"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mt-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
}