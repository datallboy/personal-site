import { useState } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import Joi from 'joi';

export default function ContactForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState('Send');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText('Sending...');
    const res = await fetch('/api/email', {
      body: JSON.stringify({
        fullname,
        email,
        subject,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { error } = await res.json();

    if (error) {
      const validationErrors = {};
      error.details.forEach((e) => {
        validationErrors[e.context.label] = e.message;
      });
      console.log(validationErrors);
      setErrors({ ...validationErrors });
      setButtonText('Send');
      return;
    }

    setShowSuccessMessage(true);
    setButtonText('Sent');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-gray-800'
    >
      <h1 className='text-2xl font-bold dark:text-gray-50'>Send me an email</h1>

      <label
        htmlFor='fullname'
        className='text-gray-500 font-light mt-8 dark:text-gray-50'
      >
        Full name<span className='text-red-500'>*</span>
      </label>
      <input
        type='text'
        name='fullname'
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500'
      />
      {errors.fullname && (
        <span className='text-red-500'>{errors.fullname}</span>
      )}
      <label
        htmlFor='email'
        className='text-gray-500 font-light mt-4 dark:text-gray-50'
      >
        E-mail<span className='text-red-500'>*</span>
      </label>
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500'
      />
      {errors.email && <span className='text-red-500'>{errors.email}</span>}
      <label
        htmlFor='subject'
        className='text-gray-500 font-light mt-4 dark:text-gray-50'
      >
        Subject<span className='text-red-500'>*</span>
      </label>
      <input
        type='text'
        name='subject'
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500'
      />
      {errors.subject && <span className='text-red-500'>{errors.subject}</span>}
      <label
        htmlFor='message'
        className='text-gray-500 font-light mt-4 dark:text-gray-50'
      >
        Message<span className='text-red-500'>*</span>
      </label>
      <textarea
        name='message'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500'
      ></textarea>
      {errors.message && <span className='text-red-500'>{errors.message}</span>}
      <div className='flex flex-col items-start justify-start'>
        <button
          className='flex flex-row gap-1 uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover disabled:bg-transparent disabled:text-gray-800'
          disabled={showSuccessMessage}
        >
          {buttonText} <RiMailSendLine />
        </button>
        {showSuccessMessage && (
          <span className='text-green-500'>
            E-mail sent! You should hear back within a few days.
          </span>
        )}
      </div>
    </form>
  );
}
