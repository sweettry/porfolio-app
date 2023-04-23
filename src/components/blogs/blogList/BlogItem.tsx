import Image from 'next/legacy/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Blog } from '@interfaces/Blog';
import { shortify } from '@lib/client/utils';

type Props = {
  blog: Blog;
};

export const BlogItem: FunctionComponent<Props> = ({ blog }) => {
  return (
    <div className='group'>
      <div className='aspect-w-1 aspect-h-1 lg:aspect-none h-80 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:h-40'>
        <Link href={`/blogs/${blog.slug}`}>
          <div className='aspect-w-1 aspect-h-1 lg:aspect-none relative h-80 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:h-40'>
            <Image
              priority
              layout='fill'
              objectFit='cover'
              src={blog.coverImage}
              className='rounded-lg hover:cursor-pointer'
              alt={''}
            />
          </div>
        </Link>
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm font-bold text-gray-700'>
            <span aria-hidden='true' className='inset-0' />
            {shortify(blog.title)}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            {shortify(blog.description)}
          </p>
        </div>
      </div>
      <Link
        className='text-sm font-bold text-gray-700'
        href={`/blogs/${blog.slug}`}
      >
        Read More
      </Link>
    </div>
  );
};
