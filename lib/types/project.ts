// Project
export interface ProjectContent {
  raw: {
    children: {
      type: string;
      children: { text: string }[];
    }[];
  };
}

export interface Project {
  date: string;
  createdAt: string;
  id: string;
  slug: string;
  title: string;
  updatedAt: string;
  content: ProjectContent;
}

export interface ProjectEdge {
  node: Project;
}

export interface projectsConnection {
  edges: ProjectEdge[];
}

export interface FetchProjectResponse {
  projectsConnection: projectsConnection;
}
