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
  createdAt: string;
  slug: string;
  title: string;
  code: ProjectContent;
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
