import fs from 'fs';
import path from 'path';
import Layout from '@/components/layout/Layout';
import Post from '@/components/blog/Post';
import AltPost from '@/components/blog/AltPost';
import Pagination from '@/components/blog/Pagination';
import getPosts from '@/utils/getPosts';
import { POSTS_PER_PAGE } from '@/config/index';

export default function BlogPage({ posts, numPages, currentPage }) {
  return (
    <Layout title='Blog - Datallboy'>
      <div className='grid gap-5'>
        {posts.map((post, index) => (
          <div key={index}>
            <Post
              key={post.frontmatter.title}
              className='lg:hidden'
              post={post}
            />
            <AltPost
              key={post.frontmatter.title + '-alt'}
              className='hidden lg:block'
              post={post}
            />
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

  const posts = getPosts();

  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  };
}
