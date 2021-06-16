import React, { useContext, useEffect, useRef, useState } from "react";
import { FaTrophy, FaCrown, FaUsers, FaClipboardList } from "react-icons/fa";
import { NavLink, useHistory, useLocation } from "react-router-dom";

import {
  AsideContainer,
  ButtonLogoffWrapper,
  LevelInfo,
  MenuWrapper,
  ProfileWrapper,
} from "./styles";

import Button from "../Button";
import { UserContext } from "../../providers/User";

import Avatar1 from "../../assets/images/avatar/avatar1.png";
import Avatar2 from "../../assets/images/avatar/avatar2.png";
import Avatar3 from "../../assets/images/avatar/avatar3.png";
import Avatar4 from "../../assets/images/avatar/avatar4.png";
import Avatar5 from "../../assets/images/avatar/avatar5.png";
import Avatar6 from "../../assets/images/avatar/avatar6.png";
import Avatar7 from "../../assets/images/avatar/avatar7.png";
import Avatar8 from "../../assets/images/avatar/avatar8.png";

const AVATARS = [
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
];

const Aside = () => {
  const { userLogoff, user, setAvatarUser } = useContext(UserContext);
  const history = useHistory();
  const { pathname } = useLocation();

  const [topIndicator, setTopIndicator] = useState(0);
  const [leftIndicator, setLeftIndicator] = useState(0);
  const [avatar, setAvatar] = useState({path: AVATARS[user.avatar], position: user.avatar});

  const indicator = useRef(null);
  const navLinks = useRef([]);

  const getDimensions = () => {
    navLinks.current.forEach((item) => {
      if (item?.className === "navlink--active") {
        const top = item.offsetTop;
        const left = item.offsetLeft;
        setLeftIndicator(`${left}px`);
        setTopIndicator(`${top}px`);
      }
    });
  };

  useEffect(() => {
    getDimensions();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    setAvatar({path: AVATARS[user.avatar], position: user.avatar})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  
  window.onresize = () => {
    getDimensions();
  };

  const logOff = () => {
    userLogoff();
    history.push("/");
  };

  const handleAvatar = () => {

    let nextAvatar
    avatar.position < 7 ? nextAvatar = avatar.position + 1 : nextAvatar = 0;
    
    setAvatar({ path: AVATARS[nextAvatar], position: nextAvatar })
    setAvatarUser(nextAvatar)
  };

  return (
    <AsideContainer>
      <ProfileWrapper avatar={avatar.path}>
        {/* <img src={AvatarNotFound} alt="Avatar não encontrado" />*/}

        <div className="avatar" onClick={handleAvatar}></div>
        <h2>{user.username}</h2>
        <LevelInfo>
          <FaTrophy />
          <span>Level iniciante</span>
        </LevelInfo>
      </ProfileWrapper>
      <div>
        <ButtonLogoffWrapper>
          <Button whiteSchema onClickFunc={logOff}>
            Sair
          </Button>
        </ButtonLogoffWrapper>
        <MenuWrapper topIndicator={topIndicator} leftIndicator={leftIndicator}>
          <NavLink
            to="/dashboard"
            ref={(el) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaClipboardList />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/achievements"
            ref={(el) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaCrown />
            <span>Conquistas</span>
          </NavLink>
          <NavLink
            to="/groups"
            ref={(el) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaUsers />
            <span>Grupos</span>
          </NavLink>
          <span
            className="indicator"
            ref={(el) => (indicator.current = el)}
          ></span>
        </MenuWrapper>
      </div>
    </AsideContainer>
  );
};

export default Aside;
