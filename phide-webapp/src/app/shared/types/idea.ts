import { Dimension } from "./dimension";

export class Idea {
  public static prefix = "idea";
  public name: string;

  constructor(
    name: string,
    public dimensions: { dimension: Dimension; percentage: number }[]
  ) {
    this.name = `${Idea.prefix}.${name}`;
  }
}
