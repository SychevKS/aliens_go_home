import { createSlice } from "@reduxjs/toolkit";
import { calculateAngle } from "../utils/formulas";
import createFlyingObjects from "./reducers/createFlyingObjects";
import shootBalls from "./reducers/shootBalls";
import moveBalls from "./reducers/moveBalls";

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
                state.gameState = createFlyingObjects(state.gameState);
                state.gameState.flyingObjects = state.gameState.flyingObjects.filter(item => 
                    (new Date().getTime() - item.createdAt) < 4000
                );
                state.angle = calculateAngle(0, 0, action.payload.x, action.payload.y);
                state.gameState.cannonBalls = moveBalls(state.gameState.cannonBalls);
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