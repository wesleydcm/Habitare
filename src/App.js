import { useContext } from "react";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";
import { UserContext } from "./providers/User";
import Aside from "./components/Aside";

function App() {
  const { authenticated } = useContext(UserContext);
  return (
    <>
      <Header />
      {authenticated && <Aside />}
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
