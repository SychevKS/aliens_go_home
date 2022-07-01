import checkCollisions from "./checkCollision";
import moveBalls from "./moveBalls";
import createFlyingObjects from "./createFlyingObjects";
import { calculateAngle } from "../../utils/formulas";

export default (state, action) => {
    const gameState = createFlyingObjects(state.gameState);
    const objectsDestroyed = checkCollisions(state.gameState.cannonBalls, state.gameState.flyingObjects);
   
    let flyingObjects = gameState.flyingObjects.filter(item => (new Date().getTime() - item.createdAt) < 4000)
    
    const lives = state.gameState.flyingObjects.length > flyingObjects.length ? state.gameState.lives - 1 : state.gameState.lives;

    const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));
    const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));

    const cannonBalls = moveBalls(state.gameState.cannonBalls).filter(cannonBall => (cannonBallsDestroyed.indexOf(cannonBall.id)))
    
    flyingObjects = flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)))

    const start = state.gameState.lives != 3 && lives <= 0; 
    console.log(state.gameState.lives != 3)

    return {
        angle: calculateAngle(0, 0, action.payload.x, action.payload.y),
        gameState: {
            ...gameState,
            started: start,
            lives: lives > 0 ? lives : 3,
            flyingObjects: lives > 0 ? flyingObjects : [],
            cannonBalls:  lives > 0 ? cannonBalls : [],
            kills: lives > 0 ? state.gameState.kills + flyingDiscsDestroyed.length : 0,
        }
    }
}