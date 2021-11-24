import Layout from '@/components/layout/Layout';
import RepoList from '@/components/projects/RepoList';

export default function ProjectsPage() {
  return (
    <Layout>
      <h2 className='max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2'>
        Github Projects
      </h2>
      <RepoList />
    </Layout>
  );
}
