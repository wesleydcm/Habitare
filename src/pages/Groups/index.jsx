import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/User";

const Groups = () => {
  const { authenticated } = useContext(UserContext);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div>Groups</div>
    </>
  );
};

export default Groups;
