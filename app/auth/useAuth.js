import { useContext } from 'react';
import AuthContext from './context';
import authStorage from '../auth/storage';
import { decodeJwt } from '../utility/decode';

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logIn = (authToken) => {
    const user = decodeJwt(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, logOut, logIn };
};
