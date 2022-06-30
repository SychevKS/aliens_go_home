import { createSlice } from "@reduxjs/toolkit";

import shootBalls from "./reducers/shootBalls";
import moveObjects from "./reducers/moveObjects"

const initialState = {
    angle: 45,
    gameState: {
        started: false,
        kills: 0,
        lives: 3,
        flyingObjects: [],
        lastObjectCreatedAt: new Date().getTime(),
        cannonBalls: [],
    },
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        moveObject: (state, action) => {
            const { angle, gameState } = moveObjects(state, action);
            state.angle = angle;
            state.gameState = gameState;
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