export interface StartupStep {
  name: string;
  completed: boolean;
}

export interface StartupStage {
  name: string;
  steps: StartupStep[];
}

export interface StartupProgress {
  name: string;
  stages: StartupStage[];
}

const STARTUP_PROGRESS: StartupProgress = {
  name: "My startup progress",
  stages: [
    {
      name: "Foundation",
      steps: [
        { name: "Setup virtual office", completed: false },
        { name: "Set mission & vision", completed: false },
        { name: "Select business name", completed: false },
        { name: "Buy domains", completed: false },
      ],
    },
    {
      name: "Discovery",
      steps: [
        { name: "Create roadmap", completed: false },
        { name: "Competitor analysis", completed: false },
      ],
    },
    {
      name: "Delivery",
      steps: [
        { name: "Release marketing website", completed: false },
        { name: "Release MVP", completed: false },
      ],
    },
  ],
};

export const fetchStartupProgress = async (): Promise<StartupProgress> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(STARTUP_PROGRESS);
    }, 500);
  });
