
class Entity {
  /*
  */
  constructor(game, parent, center, drawables) {
    this._id = new Symbol('id');
    this._game = game;
    this._parent = parent;
    this._children = [];
    // Center of the entity in absolute coordinates
    this._center = center || parent._center || new Point(0, 0);
    this._drawables = drawables;
  }
  getNearestEntity() {
    return this._game.findClosest(this._id);
  }
  update() {}
}
