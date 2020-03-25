export class NavigationItem {
  public static prefix = "navigation.item";
  public display: string;
  constructor(display: string, public uri: string, public icon: string) {
    this.display = `${NavigationItem.prefix}.${display}`;
  }
}
