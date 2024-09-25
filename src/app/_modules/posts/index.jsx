import React from 'react'
import Hero from './components/hero';
import { getPostsPerPage } from '@/app/_services';
import BlogListTitle from './components/blogListTitle';
import BlogList from './components/blogList';

const Posts = async () => {
  const posts = await getPostsPerPage(1);
  
  return (
    <div>
      <Hero />
      <div className="flex justify-center">
        <BlogListTitle />
      </div>
      <div className="mt-6 px-24 grid grid-cols-2 gap-x-8 gap-y-16">
        <BlogList posts={posts} />
      </div>
    </div>
  );
}

export default Posts