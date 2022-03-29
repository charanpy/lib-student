import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';
import { errorToaster, successToaster } from '../../lib/toast';

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
        return updatePasswordAPI({
          password: updatePasswordRef?.current?.value,
        });
      const rollNumber = rollNoRef?.current?.value;
      const password = passwordRef?.current?.value;

      if (!rollNumber || !password) return errorToaster('Invalid credentials');
      setLoading((load) => !load);

      const data = await login({ rollNumber, password });

      if (data?.message) throw new Error(data?.message);
      if (data?.student?.isDefaultPassword)
        return setUpdatePassword((show) => !show);
      successToaster('Logged In successfully');
      navigate('/');
    } catch (error) {
      console.log(error);
      errorToaster(error?.message || 'Something went wrong');
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
