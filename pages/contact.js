import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contact/ContactForm';
import { FaMastodon, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <Layout title='Contact - Datallboy'>
      <h2 className='max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2'>
        Contact
      </h2>
      <p className='text-3xl my-6 text-center dark:text-white'>Social Media</p>
      <div className='flex justify-evenly my-6'>
        <a
          className='text-xl dark:text-gray-300'
          href='https://techhub.social/@datallboy'
        >
          <FaMastodon />
        </a>
        <a
          className='text-xl dark:text-gray-300'
          href='https://twitter.com/datallboy'
        >
          <FaTwitter />
        </a>
        <a
          className='text-xl dark:text-gray-300'
          href='https://discord.gg/5kG6kp2zA8'
        >
          <FaDiscord />
        </a>
      </div>
      <p className='text-3xl my-6 text-center dark:text-white'>
        Professional inquiries?
      </p>
      <ContactForm />
    </Layout>
  );
}
