import React from 'react';
import { ExternalLink, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import { Article } from '../types/blog';

interface BlogCardProps {
  article: Article;
}

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-[#333333] mb-3 line-clamp-2 flex-shrink-0">
          {article.title}
        </h2>
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4 flex-shrink-0">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{article.creator || 'AI News'}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{format(new Date(article.pubDate), 'MMM d, yyyy')}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{article.contentSnippet}</p>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#008080] hover:text-[#006666] font-medium mt-auto flex-shrink-0"
        >
          Read More
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </article>
  );
}