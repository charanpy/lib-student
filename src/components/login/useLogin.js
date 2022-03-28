import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth.context';

const useLogin = () => {
  const navigate = useNavigate();
  const [updatePassword, setUpdatePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const updatePasswordRef = useRef('');
  const rollNoRef = useRef('');
  const passwordRef = useRef('');
  const { login, user, updatePassword: updatePasswordAPI } = useAuth();

  useEffect(() => {
    if (user) navigate('/');
    // eslint-disable-next-line
  }, [navigate]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (updatePassword)
        return updatePasswordAPI(updatePasswordRef?.current?.value);
      const rollNumber = rollNoRef?.current?.value;
      const password = passwordRef?.current?.value;

      if (!rollNumber || !password) return toast.error('Invalid credentials');
      setLoading((load) => !load);

      const data = await login({ rollNumber, password });

      if (data?.message) throw new Error(data?.message);
      if (data?.student?.isDefaultPassword)
        return setUpdatePassword((show) => !show);
      toast.success('Logged In successfully');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return [
    rollNoRef,
    passwordRef,
    onHandleSubmit,
    updatePassword,
    updatePasswordRef,
    loading,
  ];
};

export default useLogin;
