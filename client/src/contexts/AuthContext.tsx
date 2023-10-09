import { useState, useCallback, createContext, useMemo, PropsWithChildren } from 'react';
import { check } from '../apis/auth/check';

export const AuthContext = createContext({
  accessToken: '',
  username: '',
  setUser: (accessToken: string, username: string) => {},
  handleCheck: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState('');
  const [username, setUsername] = useState('');

  const setUser = useCallback((accessToken: string, username: string) => {
    setAccessToken(accessToken);
    setUsername(username);
  }, []);

  const handleCheck = useCallback(async () => {
    try {
      const data = await check(accessToken);

      setUser(data.accessToken, data.username);
      console.log(`${data.username} 님은 로그인 중이십니다.`);
    } catch (err) {
      setUser('', '');
      console.error(err);
      console.log('로그인이 필요합니다.');
    }
  }, [accessToken, setUser]);

  const contextValue = useMemo(
    () => ({ accessToken, username, setUser, handleCheck }),
    [accessToken, username, setUser, handleCheck]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
