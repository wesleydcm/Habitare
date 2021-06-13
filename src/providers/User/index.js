import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
export const UserContext = createContext([]);

let authorized = localStorage.getItem("@Habitare:Token") ? true : false;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Habitare:User")) || {}
  );
  const [authenticated, setAuthenticated] = useState(authorized);

  const userLogin = (userToken) => {
    localStorage.setItem(`@Habitare:Token`, JSON.stringify(userToken));

    const userId = jwt_decode(userToken).user_id;

    api.get(`users/${userId}/`).then((response) => {
      setUser(response.data);
      localStorage.setItem(`@Habitare:User`, JSON.stringify(response.data));
    });
    setAuthenticated(true);
  };

  const userLogoff = () => {
    localStorage.removeItem(`@Habitare:Token`);
    localStorage.removeItem(`@Habitare:dashboardLastCategory`);
    localStorage.removeItem(`@Habitare:achievementsLastCategory`);
    localStorage.removeItem(`@Habitare:groupsLastCategory`);
    setUser([]);
    localStorage.removeItem(`@Habitare:User`);
    setUser({});
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

export const useUser = () => useContext(UserContext);
