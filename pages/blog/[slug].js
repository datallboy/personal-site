import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '@/utils/getPosts';

export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt, tags },
  content,
}) {
  return (
    <Layout
      title={`${title} - Datallboy`}
      description={excerpt}
      keywords={tags.join(', ')}
      cover_image={cover_image}
    >
      <Link href='/blog'>
        <a className='text-gray-800 dark:text-white'>Go Back</a>
      </Link>
      <div className='w-full px-10 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-6'>
        <div className='flex justify-between items-center mt-4'>
          <div className='text-gray-400 dark:text-gray-300 mb-8 mr-4'>
            {date}
          </div>
        </div>
        <img src={cover_image} alt='' className='w-full rounded' />

        <div className='prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark mt-2 text-gray-800 dark:text-gray-300'>
          <ReactMarkdown children={content} />
          <hr />
          <p className='italic'>
            Want a site like this? I'm available for hire!{' '}
            <Link href='/contact'>
              <a>Send me an email</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { frontmatter, content } = getPostBySlug(slug);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
