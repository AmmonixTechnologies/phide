import { Value } from "./value";
import { Axis } from "./axis";

export class MagicTriangle extends Axis {
  constructor(name: string, from: Value, to: Value, public tip: Value) {
    super(name, from, to);
  }
}
