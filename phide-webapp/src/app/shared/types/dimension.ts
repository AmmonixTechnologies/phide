export class Dimension {
  public name: string;
  public from: string;
  public to: string;
  constructor(name: string) {
    let prefix = `dimension.${name}`;
    this.name = `${prefix}.name`;
    this.from = `${prefix}.from`;
    this.to = `${prefix}.to`;
  }
}
