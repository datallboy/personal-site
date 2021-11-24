import { formatDistance } from 'date-fns';
import { FaRegStar } from 'react-icons/fa';
import { AiOutlineFork } from 'react-icons/ai';

export default function RepoItem({ repo }) {
  return (
    <div className='shadow-lg rounded-xl max-w-xs p-4 bg-white dark:bg-gray-800 relative overflow-hidden h-64 w-80'>
      <a href={repo.html_url} target='_blank' className='w-full h-full block'>
        <div className='w-full'>
          <div className='flex flex-col'>
            <div>
              <p className='text-gray-800 dark:text-white text-xl font-medium mb-2'>
                {repo.name}
              </p>
              <p className='text-gray-400 dark:text-gray-300 text-xs font-medium mb-2'>
                Updated{' '}
                {formatDistance(new Date(repo.updated_at), new Date(), {
                  addSuffix: true,
                })}
              </p>
              <p className='text-gray-400 dark:text-gray-300 text-sm mb-4'>
                {repo.description}
              </p>
            </div>

            <div className='flex items-center absolute bottom-0 my-2'>
              <div className='flex space-x-2 items-center gap-1'>
                {repo.language && (
                  <span className='flex flex-row dark:text-gray-300'>
                    {repo.language}
                  </span>
                )}
                <span className='flex flex-row items-center gap-1 dark:text-gray-300'>
                  <FaRegStar /> {repo.stargazers_count}
                </span>
                <span className='flex flex-row items-center gap-1 dark:text-gray-300'>
                  <AiOutlineFork />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
