// People
export interface Avatar {
  id: string;
  url: string;
}

export interface Post {
  id: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  bio: string;
  category: string;
  avatar: Avatar;
  posts: Post[];
}

export interface PersonEdge {
  node: Person;
}

export interface PeopleConnection {
  edges: PersonEdge[];
}

export interface FetchPersonResponse {
  peopleConnection: PeopleConnection;
}
