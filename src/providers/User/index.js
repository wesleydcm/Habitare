import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const userLogin = (userToken) => {
    localStorage.setItem(`@Habitare:Token`, JSON.stringify(userToken));
    const userInfo = jwt_decode(userToken);
    setUser(userInfo);
    setAuthenticated(true);
  };

  const userLogoff = () => {
    localStorage.removeItem(`@Habitare:Token`);
    setUser([]);
    setAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{ user, authenticated, userLogin, userLogoff }}
    >
      {children}
    </UserContext.Provider>
  );
};
