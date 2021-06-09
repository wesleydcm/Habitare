import Aside from "./components/Aside";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
