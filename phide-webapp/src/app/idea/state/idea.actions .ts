export class SelectIdea {
  static readonly type = "[Idea] Select Idea";
  constructor(public name: string) {}
}

export class UnselectIdea {
  static readonly type = "[Idea] Unselect Idea";
  constructor(public name: string) {}
}

export class LoadInitialData {
  static readonly type = "[Idea] Load initial data";
  constructor() {}
}
