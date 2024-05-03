import { FC } from "react";
import { BundledLanguage } from "shiki";

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
  reqLang?: BundledLanguage;
  reqDesc?: string;
}
