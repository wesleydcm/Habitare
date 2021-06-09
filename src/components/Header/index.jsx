import { ButtonsWrapper, HeaderContainer } from "./styles";
import Logo from "../../assets/images/Habitare-logo.svg";
import { Redirect, useHistory, useLocation } from "react-router";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = ({ setAuthenticated }) => {
  const {pathname} = useLocation();
  const history = useHistory()

  const handleLocation = (location) => {
    if (location === "login") {
      history.push('/login');
    } else if (location === "signup") {
      history.push('/signup');
    }
  };

  const logOff = () => {
    setAuthenticated(false);
    return <Redirect to="/" />;
  };

  return (
    <HeaderContainer location={pathname}>
      <Link to="/">
        <img src={Logo} alt="Habitare" />
      </Link>
      <ButtonsWrapper location={pathname}>
        {pathname === "/" ||
        pathname === "/login" ||
        pathname === "/signup" ? (
          <>
            <Button
              whiteSchema={pathname === "/login" ? true : false}
              className="btb-login"
              onClickFunc={() => handleLocation("login")}
            >
              Login
            </Button>
            <Button
              whiteSchema={pathname === "/signup" ? true : false}
              className="btb-signup"
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