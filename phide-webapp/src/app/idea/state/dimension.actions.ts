export class SelectDimension {
  static readonly type = "[Dimension] Select Dimension ";
  constructor(public name: string) {}
}

export class UnselectDimension {
  static readonly type = "[Dimension] Unselect Dimension ";
  constructor(public name: string) {}
}
