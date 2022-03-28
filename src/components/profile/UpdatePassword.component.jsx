import { useRef, useState } from 'react';
import { useAuth } from '../../context/auth.context';
import Button from '../shared/button/Button.component';
import Popup from '../shared/popup/Popup.component';
import CloseSVG from '../shared/svg/Close.svg';
import './profile.css';

const UpdatePassword = () => {
  const { updatePassword } = useAuth();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleLoader = () => {
    setLoading((load) => !load);
  };

  const handleSubmit = () => {
    toggleLoader();
    return updatePassword(
      {
        password: passwordRef?.current?.value,
        oldPassword: oldPasswordRef?.current?.value,
      },
      toggleLoader,
      false,
      true
    );
  };
  return (
    <>
      <p
        className='text-blue-800 font-semibold underline cursor-pointer'
        onClick={() => setModal((open) => !open)}
      >
        Update Password
      </p>
      <Popup open={modal}>
        <div className='fixed top-0 left-0 stack h-full w-full updatePassword flex centerAll'>
          <section className='relative updatePasswordModal rounded-lg shadow-lg p-10 flex flex-col space-y-4'>
            <div
              className='absolute right-1 top-1'
              onClick={() => setModal((open) => !open)}
            >
              <CloseSVG className='fill-red-500 dark:fill-red-500' />
            </div>

            <label className='text-slate-900'>Update Password</label>
            <input
              className='authInput'
              type='password'
              required
              ref={oldPasswordRef}
              placeholder='Current Password'
            />
            <input
              className='authInput'
              type='password'
              required
              ref={passwordRef}
              placeholder='New Password'
            />

            <Button
              className='py-1 px-2 rounded-full w-full bg-blue-500 text-white'
              onClick={handleSubmit}
            >
              {loading ? 'Updating' : 'Update'}
            </Button>
          </section>
        </div>
      </Popup>
    </>
  );
};

export default UpdatePassword;
