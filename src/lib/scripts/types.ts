type TaskInfo = {
  summary: string;
  technologies: string[];
};

export type Station = {
  jobTitle: string;
  company: string;
  location: string;
  time: string;
  tasks: TaskInfo[];
};
