import { Axis } from "./axis";

export class Ideology {
  public static prefix = "ideology";
  public name: string;

  constructor(name: string, public axes: { axis: Axis; percentage: number }[]) {
    this.name = `${Ideology.prefix}.${name}`;
  }
}
