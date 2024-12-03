import React, { useState, useEffect } from 'react';
import BlogHeader from '../components/BlogHeader';
import BlogSkeleton from '../components/BlogSkeleton';
import BlogCard from '../components/BlogCard';
import { fetchArticles } from '../services/blogService';
import { Article } from '../types/blog';
import toast from 'react-hot-toast';

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        toast.error('Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <div className="pt-16">
      <BlogHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <BlogSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <BlogCard key={`${article.title}-${index}`} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}