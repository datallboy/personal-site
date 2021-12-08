import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sortByDate from '@/utils/sortByDate';

export default function getPosts() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort(sortByDate);
}

export const getPostBySlug = (slug) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    frontmatter,
    content,
  };
};
