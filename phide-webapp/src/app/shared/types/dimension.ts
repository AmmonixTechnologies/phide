export class Dimension {
  public static prefix = "dimension";
  public name: string;
  constructor(
    name: string,
    public from: string = "left",
    public to: string = "right"
  ) {
    this.name = `${Dimension.prefix}.${name}`;
  }
}
