import { GoalProvider } from "./GroupGoal";
import { GroupHabitProvider } from "./GroupHabit";
import { HabitProvider } from "./Habit";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GroupHabitProvider>
        <GoalProvider>
          <HabitProvider>{children}</HabitProvider>
        </GoalProvider>
      </GroupHabitProvider>
    </UserProvider>
  );
};

export default Providers;
