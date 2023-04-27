import { useState } from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import { MdContactMail } from 'react-icons/md';
import HireMeModal from './HireMeModal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName('html')[0]
        .classList.add('overflow-y-hidden');
      setShowModal(true);
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-y-hidden');
      setShowModal(false);
    }
  }
  return (
    <main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10'>
      <div className='sm:text-center lg:text-left'>
        <h1 className='mb-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
          <span className='block xl:inline'>Skilled Developer</span>
        </h1>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
          <span className='block text-indigo-600 xl:inline'>
            with Diverse Industry Experience
          </span>
        </h2>
        <p className='mt-3 font-mono text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
          Driven and versatile professional leveraging a strong background in
          customer service, analytics, and leadership to excel in the tech
          industry. Passionate about creating engaging web applications with a
          proven ability to learn quickly and adapt to new challenges. Offering
          experience in
          <span className='block font-semibold text-indigo-600 xl:inline'>
            {' '}
            HTML, CSS, JavaScript, TypeScript, Vue.js, React, Redux, Next.js,
            Node.js, TailwindCSS/Material UI, Git
          </span>
        </p>
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='rounded-md shadow'>
            <a
              onClick={showHireMeModal}
              href='#'
              className='flex w-full items-center justify-center rounded-xl border border-transparent bg-indigo-700 px-8 py-3 text-base font-medium  text-white duration-500 hover:bg-indigo-100 hover:text-indigo-700 md:px-10 md:py-4  md:text-lg'
            >
              <MdContactMail className='sn:w-6 mr-2 h-5 w-5 duration-100 sm:mr-3 sm:h-6'></MdContactMail>
              <span className='text-sm duration-100 sm:text-lg'>
                Contact me
              </span>
            </a>
          </div>
          <div className='mt-3 sm:ml-3 sm:mt-0'>
            <a
              download='Dmitry-Sevryukov-resume.pdf'
              href='/Dmitry-Sevryukov-resume.pdf'
              className='flex w-full items-center justify-center rounded-xl border border-transparent bg-indigo-700 px-8 py-3 text-base font-medium text-white duration-500 hover:bg-indigo-100 hover:text-indigo-700 md:px-10 md:py-4 md:text-lg'
              aria-label='Download Resume'
            >
              <FiArrowDownCircle className='sn:w-6 mr-2 h-5 w-5 duration-100 sm:mr-3 sm:h-6'></FiArrowDownCircle>
              <span className='text-sm duration-100 sm:text-lg'>
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>{showModal ? <HireMeModal onClose={showHireMeModal} /> : null}</div>
    </main>
  );
};

export default Header;
