import { Dimension } from "./dimension";

export interface Idea {
  name: string;
  dimensions: { dimension: Dimension; percentage: number }[];
}
