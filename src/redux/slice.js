import { createSlice } from "@reduxjs/toolkit";
import { calculateAngle } from "../utils/formulas";


const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
}

const initialState = {
    angle: 45,
    gameState: initialGameState,
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        moveObject: (state, action) => {state.angle = calculateAngle(0, 0, action.payload.x, action.payload.y)},
        startGame: (state, initialGameState) => {state.gameState.started = true }
    }
})

const {actions, reducer} = slice;

export default reducer;
export const {
    moveObject,
    startGame,
} = actions;