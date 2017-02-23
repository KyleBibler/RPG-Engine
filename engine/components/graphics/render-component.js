

class Drawable {
  /*
  */
  constructor(entity, imagePath) {
    this._entity = entity;
    this._imagePath = imagePath;
    this._state = DRAWSTATES.UNLOADED;
    this.loadImage();
  }
  hide() {}
  loadImage() {}
  draw() {
    if (this._state === DRAWSTATES.SHOWN) {
      // Draw only shown drawables
    }
  }
}
