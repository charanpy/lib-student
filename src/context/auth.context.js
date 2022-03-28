import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FullPageLoader from '../components/shared/loader/FullPageLoader.component';
import ApiRequest from '../lib/ApiRequest';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    user: null,
    loading: true,
  });

  const { user, loading } = auth;

  const getMe = async () => {
    try {
      const request = new ApiRequest(
        '/auth/student/me',
        'GET',
        null,
        false,
        true
      );
      if (!request.getToken()) throw new Error();
      const data = await request.request();

      if (data?.user) {
        setAuth((prev) => ({ ...prev, loading: false, user: data?.user }));
      } else throw new Error();
    } catch (error) {
      console.log('No token');
      localStorage.removeItem('token');
      setAuth((prev) => ({ ...prev, loading: false, user: null }));
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  if (loading) return <FullPageLoader />;

  const login = async (payload) => {
    const req = new ApiRequest('/auth/student', 'POST', payload);

    const data = await req.request();

    if (data?.student) {
      req.setToken(data?.token);
      setAuth((prev) => ({ ...prev, user: data?.student }));
    }

    return data;
  };

  const updatePassword = async (password) => {
    try {
      if (!password) return toast.error('Invalid credentials');
      await new ApiRequest(
        '/student/password',
        'POST',
        { password },
        null,
        true
      ).request();
      toast.success('Password updated');
    } catch (error) {
      toast.error('Try again after some times');
    } finally {
      navigate('/dashboard');
    }
  };

  const logout = async () => {
    localStorage.removeItem('token');
    setAuth((prev) => ({ ...prev, user: null }));
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updatePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
