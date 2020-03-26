export class SelectDimension {
  static readonly type = "[Visualizer] Select Dimension";
  constructor(public name: string) {}
}

export class UnselectDimension {
  static readonly type = "[Visualizer] Unselect Dimension";
  constructor(public name: string) {}
}
export class SelectIdea {
  static readonly type = "[Visualizer] Select Idea";
  constructor(public name: string) {}
}

export class UnselectIdea {
  static readonly type = "[Visualizer] Unselect Idea";
  constructor(public name: string) {}
}

export class LoadInitialData {
  static readonly type = "[Visualizer] Load initial data";
  constructor() {}
}
