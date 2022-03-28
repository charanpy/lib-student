import { useState } from 'react';
import './profile.css';

const UpdatePassword = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <p className='text-blue-800 font-semibold underline'>Update Password</p>
      {modal && (
        <div className='fixed top-0 left-0 stack h-full w-full updatePassword flex centerAll'>
          <section className='updatePasswordModal rounded-lg shadow-lg'>
            <input className='authInput' type='password' required />
          </section>
        </div>
      )}
    </>
  );
};

export default UpdatePassword;
