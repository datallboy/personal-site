import Link from 'next/link';
import Image from 'next/image';

export default function Post({ post, className }) {
  return (
    <div
      className={`${className} w-full px-10 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-6`}
    >
      <span className='mt-2 text-gray-400 dark:text-gray-300'>
        {post.frontmatter.date}
      </span>
      <div className='flex gap-2 justify-between'>
        <div className='mt-2'>
          <Link href={`/blog/${post.slug}`}>
            <a className='text-2xl text-gray-800 dark:text-white font-bold hover:underline'>
              {post.frontmatter.title}
            </a>
          </Link>

          <p className='mt-2 text-gray-500 dark:text-gray-300'>
            {post.frontmatter.excerpt}
          </p>

          <div className='mt-6'>
            <Link href={`/blog/${post.slug}`}>
              <a className='text-gray-400 hover:text-blue-500'>Read More</a>
            </Link>
          </div>

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
        {post.frontmatter.cover_image && (
          <Image
            src={post.frontmatter.cover_image}
            alt=''
            height={134}
            width={200}
            className='mb-4 rounded'
            layout='fixed'
          />
        )}
      </div>
    </div>
  );
}
