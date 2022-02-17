import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@/components/layout/Header';

export default function Layout({
  title,
  description,
  keywords,
  cover_image,
  children,
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://datallboy.com${router.asPath}`}
        />
        <meta
          property='og:image'
          content={`https://datallboy.com${cover_image}`}
        />
      </Head>
      <main className='dark:bg-gray-800 font-mono bg-white relative h-page'>
        <Header />
        <div className='flex relative z-20 items-center'>
          <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-4'>
            <div className='flex flex-col'>{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}

Layout.defaultProps = {
  title: 'Datallboy - Sysadmin, Full Stack JS Developer, and New Dad',
  description:
    'Personal site to showcase my portfolio, blog about new projects, and for others to contact me.',
  keywords: 'tech, blog, portfolio',
};
