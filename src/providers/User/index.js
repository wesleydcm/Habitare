import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const userLogin = (userToken) => {
    localStorage.setItem(`@Habitare:Token`, JSON.stringify(userToken));
    const userId = jwt_decode(userToken).user_id;
    api.get(`users/${userId}/`).then((response) => {
      setUser(response.data);
    });
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
