import Link from 'next/link';
import Image from 'next/image';

export default function Post({ post, className }) {
  return (
    <div
      className={`${
        className + ' '
      } w-full px-10 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-6`}
    >
      {post.frontmatter.cover_image && (
        <div className='flex justify-center'>
          <Image
            src={post.frontmatter.cover_image}
            alt=''
            height={420}
            width={600}
            className='mb-4 rounded'
          />
        </div>
      )}

      <div className='flex justify-between items-center'>
        <span className='text-gray-400 dark:text-gray-300'>
          {post.frontmatter.date}
        </span>
      </div>

      <div className='mt-2'>
        <Link href={`/blog/${post.slug}`}>
          <a className='text-2xl text-gray-800 dark:text-white font-bold hover:underline'>
            {post.frontmatter.title}
          </a>
        </Link>
        <p className='mt-2 text-gray-500 dark:text-gray-300'>
          {post.frontmatter.excerpt}
        </p>
      </div>

      <div className='flex justify-between items-center mt-6'>
        <Link href={`/blog/${post.slug}`}>
          <a className='text-gray-400 hover:text-blue-500'>Read More</a>
        </Link>
        {post.frontmatter.tags && post.frontmatter.tags.length != 0 && (
          <div className='flex flex-wrap justify-starts items-center mt-4'>
            {post.frontmatter.tags.map((cat) => (
              <div className='text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl'>
                {cat}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
