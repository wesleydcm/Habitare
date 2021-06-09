import { ButtonsWrapper, HeaderContainer } from "./styles";
import Logo from "../../assets/images/Habitare-logo.svg";
import { Redirect, useLocation } from "react-router";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = ({ setAuthenticated }) => {
  const {pathname} = useLocation();

  const handleLocation = (location) => {
    if (location === "login") {
      return <Redirect to="/login" />;
    } else if (location === "signup") {
      return <Redirect to="/signup" />;
    }
  };

  const logOff = () => {
    setAuthenticated(false);
    return <Redirect to="/" />;
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Habitare" />
      </Link>
      <ButtonsWrapper>
        {pathname === "/" ||
        pathname === "/login" ||
        pathname === "/signup" ? (
          <>
            <Button
              whiteSchema={pathname === "/login" ? true : false}
              onClickFunc={() => handleLocation("login")}
            >
              Login
            </Button>
            <Button
              whiteSchema={pathname === "/signup" ? true : false}
              onClickFunc={() => handleLocation("signup")}
            >
              Cadastro
            </Button>
          </>
        ) : (
          <Button onClickFunc={logOff}>Sair</Button>
        )}
      </ButtonsWrapper>
    </HeaderContainer>
  );
};

export default Header;
