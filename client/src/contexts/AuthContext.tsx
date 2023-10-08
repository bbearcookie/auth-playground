import { useState, useCallback, createContext, useMemo, PropsWithChildren } from 'react';

export const AuthContext = createContext({
  accessToken: '',
  username: '',
  handleLogin: (accessToken: string, username: string) => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = useCallback((accessToken: string, username: string) => {
    setAccessToken(accessToken);
    setUsername(username);
  }, []);

  const contextValue = useMemo(() => ({ accessToken, username, handleLogin }), [accessToken, username, handleLogin]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
