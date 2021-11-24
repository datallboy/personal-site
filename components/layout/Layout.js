import Header from '@/components/layout/Header';

export default function Layout({ children }) {
  return (
    <main className='dark:bg-gray-800 font-mono bg-white relative h-page'>
      <Header />
      <div className='flex relative z-20 items-center'>
        <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-4'>
          <div className='flex flex-col'>{children}</div>
        </div>
      </div>
    </main>
  );
}
