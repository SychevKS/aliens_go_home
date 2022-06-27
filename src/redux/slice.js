import { createSlice } from "@reduxjs/toolkit";
import { calculateAngle } from "../utils/formulas";
import createFlyingObjects from "./reducers/createFlyingObjects";

const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date()
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

            return {
                ...createFlyingObjects(state),
                angle: calculateAngle(0, 0, action.payload.x, action.payload.y)
            }
        },
        startGame: (state, initialGameState) => {state.gameState.started = true}
    }
})

const {actions, reducer} = slice;

export default reducer;
export const {
    moveObject,
    startGame,
} = actions;