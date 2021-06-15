import { AchievementContext } from "./Achievement";
import { ActivitiesProvider } from "./GroupActivities";
import { GoalProvider } from "./GroupGoal";
import { GroupHabitProvider } from "./GroupHabit";
import { HabitProvider } from "./Habit";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GroupHabitProvider>
        <GoalProvider>
          <ActivitiesProvider>
            <HabitProvider>
              <AchievementContext>{children}</AchievementContext>
            </HabitProvider>
          </ActivitiesProvider>
        </GoalProvider>
      </GroupHabitProvider>
    </UserProvider>
  );
};

export default Providers;
