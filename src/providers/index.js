import { GroupHabitProvider } from "./GroupHabit";
import { HabitProvider } from "./Habit";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GroupHabitProvider>
        <HabitProvider>{children}</HabitProvider>
      </GroupHabitProvider>
    </UserProvider>
  );
};

export default Providers;
