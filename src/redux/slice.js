import { createSlice } from "@reduxjs/toolkit";
import { calculateAngle } from "../utils/formulas";
import createFlyingObjects from "./reducers/createFlyingObjects";
import shootBalls from "./reducers/shootBalls";
import moveBalls from "./reducers/moveBalls";
import checkCollisions from "./reducers/checkCollision";

const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date().getTime(),
    cannonBalls: [],
}

const initialState = {
    angle: 45,
    gameState: initialGameState,
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        moveObject: (state, action) => {

            const objectsDestroyed = checkCollisions(state.gameState.cannonBalls, state.gameState.flyingObjects);
            const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));
            const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));

            state.gameState = createFlyingObjects(state.gameState);
            state.gameState.flyingObjects = state.gameState.flyingObjects.filter(item => 
                (new Date().getTime() - item.createdAt) < 4000
            );
            state.angle = calculateAngle(0, 0, action.payload.x, action.payload.y);
            state.gameState.cannonBalls = moveBalls(state.gameState.cannonBalls);
            state.gameState.cannonBalls = state.gameState.cannonBalls.filter(cannonBall => (cannonBallsDestroyed.indexOf(cannonBall.id)));
            state.gameState.flyingObjects = state.gameState.flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));

            const lostLife = state.gameState.flyingObjects.length > state.gameState.flyingObjects.length;
            let lives = state.gameState.lives;
            if (lostLife) {
                lives--;
            }
            state.gameState.lives = lives;

            const started = lives > 0;
            if (!started) {
                state.gameState.flyingObjects = [];
                state.gameState.cannonBalls = [];
                state.gameState.lives = 3;
            }

        },
        startGame: (state) => {state.gameState.started = true},
        shoot: (state, action) => {state.gameState = shootBalls(state.gameState, action)},
    }
})

const {actions, reducer} = slice;

export default reducer;
export const {
    moveObject,
    startGame,
    shoot,
} = actions;