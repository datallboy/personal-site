import useSWR from 'swr';

import RepoItem from './RepoItem';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function RepoList() {
  const { data, error } = useSWR('/api/github/repos', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
      {data.repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
