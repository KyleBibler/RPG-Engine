
class Level extends Entity {
  /*
  */
  constructor(game, drawables) {
    super(game, undefined, new Point(0, 0), drawables);
  }
  load() {}
  transitionTo(newLevel) {}
}
