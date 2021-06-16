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

  const userLogin = async (userToken) => {
    localStorage.setItem(`@Habitare:Token`, JSON.stringify(userToken));

    const userId = await jwt_decode(userToken).user_id;

    api.get(`users/${userId}/`).then((response) => {
      let userLogged = response.data;

      if (!localStorage.getItem(`Habitare:User${userId}`)) {
        userLogged = {
          ...userLogged,
          avatar: 0,
        };

        localStorage.setItem(
          `@Habitare:User${userId}`,
          JSON.stringify(userLogged)
        );
        localStorage.setItem(`@Habitare:User`, JSON.stringify(userLogged));
      } else {
        userLogged = JSON.parse(
          localStorage.getItem(`@Habitare:User${userLogged.id}`)
        );
      }

      localStorage.setItem(`@Habitare:User`, JSON.stringify(userLogged));
      setUser(userLogged);
    });
    setAuthenticated(true);
  };

  const userLogoff = () => {
    localStorage.removeItem(`@Habitare:Token`);
    localStorage.removeItem(`@Habitare:dashboardLastCategory`);
    localStorage.removeItem(`@Habitare:achievementsLastCategory`);
    localStorage.removeItem(`@Habitare:groupsLastCategory`);
    localStorage.removeItem(`@Habitare:User`);

    setUser([]);
    setUser({});
    setAuthenticated(false);
  };

  const setAvatarUser = (key) => {
    const avatar = key;
    const newAvatar = {
      ...user,
      avatar,
    };

    localStorage.setItem(`@Habitare:User${user.id}`, JSON.stringify(newAvatar));
    localStorage.setItem(`@Habitare:User`, JSON.stringify(newAvatar));

    setUser({
      ...newAvatar,
    });
  };

  return (
    <UserContext.Provider
      value={{ user, authenticated, userLogin, userLogoff, setAvatarUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
