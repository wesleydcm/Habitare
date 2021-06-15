import { AchievementProvider } from "./Achievement";
import { ActivitiesProvider } from "./GroupActivities";
import { GoalProvider } from "./GroupGoal";
import { GroupHabitProvider } from "./GroupHabit";
import { HabitProvider } from "./Habit";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <AchievementProvider>
        <GroupHabitProvider>
          <GoalProvider>
            <ActivitiesProvider>
              <HabitProvider>{children}</HabitProvider>
            </ActivitiesProvider>
          </GoalProvider>
        </GroupHabitProvider>
      </AchievementProvider>
    </UserProvider>
  );
};

export default Providers;
