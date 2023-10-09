import { useState, useCallback, createContext, useMemo, PropsWithChildren } from 'react';
import { check } from '../apis/auth/check';

export const AuthContext = createContext({
  isLoading: true,
  isLoggedIn: false,
  accessToken: '',
  user: {
    username: '',
  },
  handleLogin: (accessToken: string, username: string) => {},
  handleCheck: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState('');
  const [user, setUser] = useState({
    username: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = useMemo(() => !!accessToken, [accessToken]);

  const handleLogin = useCallback((accessToken: string, username: string) => {
    setAccessToken(accessToken);
    setUser({ username });
  }, []);

  const handleCheck = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await check(accessToken);
      handleLogin(data.accessToken, data.username);

      console.log(`${data.username} 님은 로그인 중이십니다.`);
    } catch (err) {
      handleLogin('', '');

      console.error(err);
      console.log('로그인이 필요합니다.');
    } finally {
      setIsLoading(false);
    }
  }, [accessToken, handleLogin]);

  const contextValue = useMemo(
    () => ({ isLoading, isLoggedIn, accessToken, user, handleLogin, handleCheck }),
    [isLoading, isLoggedIn, accessToken, user, handleLogin, handleCheck]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
