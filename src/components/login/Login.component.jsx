import React from 'react';
import useLogin from './useLogin';
import Button from '../shared/button/Button.component';
import './login.css';

export const darkInputCls =
  'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-blue-500 focus:border-blue-500';

const showMessage = (updatePassword) => (updatePassword ? 'Update' : 'LOGIN');

const Login = () => {
  const [
    rollNoRef,
    passwordRef,
    onHandleSubmit,
    updatePassword,
    updatePasswordRef,
    loading,
  ] = useLogin();
  return (
    <section className='min-h-screen row centerAll px-5 md:px-20 md:space-x-20'>
      <div className='hidden md:flex w-[400px] h-[400px]'>
        <img src='/login3.svg' alt='login' width={400} height={400} />
      </div>
      <form
        className='flex flex-col justify-center items-start space-y-8'
        onSubmit={onHandleSubmit}
      >
        {updatePassword ? (
          <>
            <h1 className='text-2xl text-slate-900 dark:text-slate-100 2xl:text-3xl'>
              Update Password
            </h1>
            <div className='space-y-2 flex flex-col'>
              <label className='text-slate-900 dark:text-white 2xl:text-xl'>
                Password
              </label>
              <input
                ref={updatePasswordRef}
                className={`authInput ${darkInputCls}`}
                placeholder='Enter Password'
                type='password'
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className='space-y-2'>
              <h1 className='text-2xl text-slate-900 dark:text-slate-100 2xl:text-3xl'>
                Welcome Back!
              </h1>
              <p className='text-slate-500 2xl:text-xl'>
                Login to your account...
              </p>
            </div>
            <div className='space-y-2 flex flex-col'>
              <label className='text-slate-900 dark:text-white 2xl:text-xl'>
                Roll no
              </label>
              <input
                ref={rollNoRef}
                className={`authInput ${darkInputCls}`}
                placeholder='Enter Roll no'
                type='text'
                required
                autoComplete='true'
              />
            </div>
            <div className='space-y-2 flex flex-col'>
              <label className='text-slate-900 dark:text-white 2xl:text-xl'>
                Password
              </label>
              <input
                className={`authInput ${darkInputCls}`}
                placeholder='Enter Password'
                type='password'
                required
                ref={passwordRef}
                autoComplete='true'
              />
            </div>
          </>
        )}
        <div className='w-full'>
          <Button
            disabled={loading}
            className='w-full p-2 rounded-lg text-white bg-blue-500 2xl:text-xl'
          >
            {loading ? 'LOADING' : showMessage(updatePassword)}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
