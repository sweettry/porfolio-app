import { FormEvent } from 'react';
import { FiX } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import Button from '@/components/resusable/Button';

const HireMeModal = ({ onClose }: { onClose: () => void }) => {
  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_USER_ID || ''
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          onClose(); // Close the modal after sending the email
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );
  };
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='bg-filter fixed inset-0 z-20 h-full w-full bg-black bg-opacity-50'></div>
      <div className='modal-wrapper z-30 flex items-center'>
        <div className='modal relative mx-5 max-h-screen max-w-md flex-row rounded-lg bg-white shadow-lg md:max-w-xl lg:max-w-xl xl:max-w-xl'>
          <div className='modal-header border-ternary-light flex justify-between gap-10 border-b p-5'>
            <h5 className='text-xl'>
              Let&apos;s explore how we can work together to do great things!
            </h5>
            <button onClick={onClose} className='px-4 font-bold'>
              <FiX className='text-3xl' />
            </button>
          </div>
          <div className='modal-body h-full w-full p-5'>
            <form onSubmit={sendEmail} className='m-4 max-w-xl text-left'>
              <div className=''>
                <input
                  className='text-md w-full rounded-md border px-5 py-2'
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Name'
                  aria-label='Name'
                />
              </div>
              <div className='mt-6'>
                <input
                  className='text-md w-full rounded-md border px-5 py-2'
                  id='company'
                  name='company'
                  type='text'
                  placeholder='Company'
                  aria-label='Company'
                />
              </div>
              <div className='mt-6'>
                <input
                  className='text-md w-full rounded-md border px-5 py-2'
                  id='email'
                  name='email'
                  type='text'
                  placeholder='Email'
                  aria-label='Email'
                />
              </div>

              <div className='mt-6'>
                <textarea
                  className='text-md w-full rounded-md border px-5 py-2'
                  id='message'
                  name='message'
                  cols={14}
                  rows={6}
                  aria-label='Details'
                  placeholder='Message...'
                ></textarea>
              </div>

              <div className='mt-6 pb-4 sm:pb-1'>
                <Button
                  onSubmit={onClose}
                  aria-label='Submit Request'
                  title='Send Request'
                  type='submit'
                  className='rounded-md	bg-indigo-500 px-4 py-2	text-white duration-500	hover:bg-indigo-600'
                />
              </div>
            </form>
          </div>
          <div className='modal-footer border0-t mt-2 px-8 py-5 text-right sm:mt-0'>
            <Button
              onClick={onClose}
              title='Close'
              className='hover:bg-ternary-dark rounded-md bg-gray-600 px-4 py-2 text-white duration-500'
              aria-label='Close Modal'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMeModal;
