

class Collidable extends Entity {
  /*
  */
  constructor(game, parent, center, drawables) {
    super(game, parent, center, drawables);
  }

  getNearestCollidable() {
    return this._game.findClosest(this._id, Collidable);
  }

}
