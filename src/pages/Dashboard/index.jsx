import NewHabit from "../../components/NewHabit";
import Aside from "../../components/Aside";

const Dashboard = () => {
  return (
    <>
      <Aside />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <NewHabit />
      </div>
    </>
  );
};

export default Dashboard;
