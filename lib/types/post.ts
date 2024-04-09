// Posts
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: {
    url: string;
  };
  category: string[];
  createdAt: string;
  content: {
    raw: RawContent;
  };
  person: {
    name: string;
    id: string;
    avatar: {
      url: string;
    };
  };
}

interface RawContent {
  children: {
    type: string;
    children: {
      text: string;
    }[];
    src?: string;
    title?: string;
    width?: number;
    handle?: string;
    height?: number;
    mimeType?: string;
  }[];
}

export interface Edge {
  node: Post;
}

export interface FetchPostResponse {
  postsConnection?: {
    edges: Edge[];
  };
}
