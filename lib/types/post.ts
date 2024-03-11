// Posts
export interface Post {
    id: string;
    title: string;
    slug: string;
    thumbnail: {
      url: string;
    };
    category: string;
    createdAt: string;
    content: {
      html: string;
    };
    person: {
      name: string;
      id: string;
      avatar: {
        url: string;
      };
    };
  }
  
  export interface Edge {
    node: Post;
  }
  
  export interface FetchPostResponse {
    postsConnection?: {
      edges: Edge[];
    };
  }