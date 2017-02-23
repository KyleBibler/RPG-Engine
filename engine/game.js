/*
*
*/
const GAMEDEFAULTS = {
  maxDrawRadius: 3000,  // Draw radius around any controllable characters
  maxUpdateRadius: 4500,  // Update radius around controllable characters
  tickRate: 40,  // Update rate of the game in ms
};

class GameEngine {
  /*
  *
  */
  constructor(canvas) {
      this._canvas = canvas;
      this.initializeDefaults();
      this._gameState = GAMESTATES.INITIALIZED;
  }

  initializeDefaults() {
    this._maxDrawRadius = GAMEDEFAULTS.maxDrawRadius;
    this._maxUpdateRadius = GAMEDEFAULTS.maxUpdateRadius;
    this._tickRate = GAMEDEFAULTS.tickRate;
    this._entities = {};
  }

  update() {
    for (let entityId in this._entities) {
      this._entities[entityId].update();
    }
    this.garbageCollect();
  }


  tick() {
    if (this._gameState === GAMESTATES.RUNNING) {

    }
  }

  start() {
    // Start of a new game
    this._gameState = GAMESTATES.RUNNING;
  }

  pause() {
    this._gameState = GAMESTATES.PAUSED;
  }

  resume() {
    this._gameState = GAMESTATES.RUNNING;
  }

  quit() {
    this._gameState = GAMESTATES.STOPPED;
  }

  garbageCollect() {}

}
