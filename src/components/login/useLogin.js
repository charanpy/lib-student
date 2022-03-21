import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth.context';

const useLogin = () => {
  const navigate = useNavigate();
  const rollNoRef = useRef('');
  const passwordRef = useRef('');
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) navigate('/');
    // eslint-disable-next-line
  }, [navigate]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rollNumber = rollNoRef?.current?.value;
      const password = passwordRef?.current?.value;

      if (!rollNumber || !password) return toast.error('Invalid credentials');

      const data = await login({ rollNumber, password });

      if (data?.message) throw new Error(data?.message);
      toast.success('Logged In successfully');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error?.message || 'Something went wrong');
    }
  };

  return [rollNoRef, passwordRef, onHandleSubmit];
};

export default useLogin;
