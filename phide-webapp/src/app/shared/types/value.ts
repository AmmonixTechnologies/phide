export class Value {
  public name: string;
  constructor(name: string) {
    let prefix = `value.${name}`;
    this.name = `${prefix}.name`;
  }
}
