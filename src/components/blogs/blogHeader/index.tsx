import { FunctionComponent } from 'react';
import Image from 'next/legacy/image';
import { Blog } from '@interfaces/Blog';

type Props = {
  blog: Blog;
};

const BlogHeader: FunctionComponent<Props> = ({ blog }) => {
  return (
    <div className='blog-detail-header'>
      <div className='mb-2 flex flex-row justify-between'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <a href='#'>
              <span className='sr-only'>{blog.author}</span>
              <div className='relative !mb-0 h-10 w-10'>
                <Image
                  priority
                  layout='fill'
                  objectFit='cover'
                  className='rounded-full'
                  src={blog.authorImage}
                  alt=''
                />
              </div>
            </a>
          </div>
          <div className='ml-3'>
            <p className='!mb-0 text-sm font-medium text-gray-900'>
              <a href='#' className='hover:underline'>
                {blog.author}
              </a>
            </p>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <time dateTime={blog.date}>{blog.date}</time>
            </div>
          </div>
        </div>
        <div className='flex self-end'>{/* Social Links Here */}</div>
      </div>
      <h1 className='mb-1 text-4xl font-bold'>{blog.title}</h1>
      <h2 className='blog-detail-header-subtitle mb-2 text-xl text-gray-600'>
        {blog.description}
      </h2>
      <div className='relative mx-auto h-96 w-full bg-black'>
        <Image
          priority
          layout='fill'
          objectFit='cover'
          src={blog.coverImage}
          alt=''
        />
      </div>
    </div>
  );
};

export default BlogHeader;
