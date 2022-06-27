import { createSlice } from "@reduxjs/toolkit";
import { calculateAngle } from "../utils/formulas";

const initialState = {
    angle: 45,
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        moveObject: (state, action) => {state.angle = calculateAngle(0, 0, action.payload.x, action.payload.y)}
    }
})

const {actions, reducer} = slice;

export default reducer;
export const {
    moveObject,
} = actions;