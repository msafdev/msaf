import { FC } from "react";

// Types
export interface Components {
  component: FC<any>;
  path: string;
  type: string;
  name: string;
}

export interface Categories {
  name: string;
  type: string;
  description: string;
  requirement?: string[];
  url: string;
}
