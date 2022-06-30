import { calculateAngle } from '../../utils/formulas';

function shoot(state, action) {
    if (!state.started) return state;
    
    const { cannonBalls } = state;

    if (cannonBalls.length === 3) return state;

    const { x, y } = action.payload;

    const cannonBall = {
        position: { x: 0, y: 0 },
        angle: calculateAngle(0, 0, x, y),
        id: new Date().getTime(),
    };

    return {
        ...state,
        cannonBalls: [...cannonBalls, cannonBall]
    }
}

export default shoot;