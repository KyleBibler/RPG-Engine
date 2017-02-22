/*
*
*/
const GAMEDEFAULTS = {
  maxDrawRadius: 3000,  // Draw radius around any controllable characters
  maxUpdateRadius: 4500,  // Update radius around controllable characters
  tickRate: 3,  // Update rate of the game in ms
};

class GameEngine {
  /*
  *
  */
  constructor(canvas, engineConfigObj) {
      this._canvas = canvas;
      this.initializeDefaults();
      if (engineConfigObj) {
        this.parseEngineConfig(engineConfigObj);
      }
      this._gameState = GAMESTATES.INITIALIZED;
  }

  parseEngineConfig(engineConfigObj) {

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

  findClosest(entityId, classType) {
    let closest = undefined;
    let closestDist = -1;
    let currentEntity = this._entities[entityId];
    for (let otherEntityId in this._entities) {
      if (entityId !== otherEntityId) {
        let entity = this._entities[otherEntityId];
        if (!classType || entity instanceof classType) {
          let dist = MathUtil.euclidianDist(
              currentEntity._center, entity.center);
          if (!closest || dist < closestDist) {
            closestDist = dist;
            closest = entity;
          }
        }
      }
    }
  }

  draw() {

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

  garbageCollect() {
    for (let entityId in this._entities) {
      if (this._entities[entityId].state >= ENTITYSTATES.DEAD) {
        delete this._entities[entityId];
      }
    }
  }

}
