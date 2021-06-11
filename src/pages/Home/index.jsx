import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/User";

const Home = () => {
  const { authenticated } = useContext(UserContext);

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div>Home</div>
    </>
  );
};

export default Home;
