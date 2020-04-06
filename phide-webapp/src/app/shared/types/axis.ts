import { Value } from "./value";

export class Axis {
  public name: string;

  constructor(name: string, public from: Value, public to: Value) {
    let prefix = `axis.${name}`;
    this.name = `${prefix}.name`;
  }
}
