import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FullPageLoader from '../components/shared/loader/FullPageLoader.component';

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
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/auth/student/me`,
        {
          credentials: 'include',
        }
      );
      const data = await res.json();

      if (data?.user) {
        setAuth((prev) => ({ ...prev, loading: false, user: data?.user }));
      } else throw new Error();
    } catch (error) {
      setAuth((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  if (loading) return <FullPageLoader />;

  const login = async (payload) => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/student`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data?.student) setAuth((prev) => ({ ...prev, user: data?.student }));

    return data;
  };

  const logout = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
        credentials: 'include',
      });
      const data = await res.json();
      if (data.status === 'fail' || data.status === 'error') throw new Error();
      toast.success('Logged out successfully');
      setAuth((prev) => ({ ...prev, user: null }));
      navigate('/login');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
