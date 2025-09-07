export type Skill = {
  name: string;
  icon: React.ComponentType<any>;
  xp: number;
  level: number;
  maxXp: number;
  xpGainedToday: number;
  leveledUpToday: boolean;
  description: string;
};
