import Image from 'next/legacy/image';
import Link from 'next/link';
import { PageLayout } from '@components/layouts';
import { Portfolio } from '@interfaces/Portfolio';
import {
  getPortfolioBySlugWithMarkdown,
  getPortfolioSlugs,
} from '@lib/portfolios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

type Props = {
  portfolio: Portfolio;
};

const PortfolioDetail: NextPage<Props> = ({ portfolio }) => {
  return (
    <PageLayout pageTitle={portfolio.title}>
      <div className='pt-2'>
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-8'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {portfolio.title}
            </h1>
          </div>
          <div className='relative mt-4 lg:row-span-3 lg:mt-0'>
            <Image
              // layout='fill'
              height={1059}
              width={640}
              className='h-56 w-full rounded-3xl object-cover sm:h-72 md:h-96 lg:h-full lg:w-full'
              alt=''
              src={portfolio.screenshot}
            />
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>
                  {portfolio.description}
                </p>
              </div>
            </div>

            <div className='mt-10 flex'>
              <div className='mr-5 flex pr-2'>
                <h3 className='text-sm font-medium text-gray-900'>
                  Demo:
                  <Link
                    className='px-2 underline hover:text-gray-600'
                    href={portfolio.screenshot}
                    target='_blank'
                  >
                    View Live Demo
                  </Link>
                </h3>
              </div>
              <div className='px-2'>
                <h3 className='text-sm font-medium text-gray-900'>
                  Source Code:
                  <Link
                    className='px-2 underline hover:text-gray-600'
                    href={portfolio.screenshot}
                    target='_blank'
                  >
                    View on GitHub
                  </Link>
                </h3>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>
                Technologies Highlights
              </h3>

              <div className='mt-4'>
                <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
                  {portfolio.technologies.map((technologie) => (
                    <li key={technologie} className='text-gray-400'>
                      <span className='text-gray-600'>{technologie}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-sm font-medium text-gray-900'>Details</h2>
              <div className='mt-4 space-y-6'>
                <article className='text-sm text-gray-600'>
                  <div
                    dangerouslySetInnerHTML={{ __html: portfolio.content }}
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;
  const portfolio = await getPortfolioBySlugWithMarkdown(slug);

  return {
    props: { portfolio },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getPortfolioSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PortfolioDetail;
