import {
    createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
    flyingObjectsStarterPositions
  } from '../../utils/constants';
  
export default (state) => {
    if (!state.started) return state; // игра не запущена

    const { lastObjectCreatedAt, flyingObjects } = state;
  
    const createNewObject = (
        (new Date()).getTime() - lastObjectCreatedAt > createInterval &&
        flyingObjects.length < maxFlyingObjects
    );

    if (!createNewObject) return state; // нет нужды создавать новые объекты в данный момент

    const id = new Date().getTime();
    const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
    const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
    const newFlyingObject = {
        position: {
            x: flyingObjectPosition,
            y: flyingObjectsStarterYAxis,
        },
        createdAt: new Date().getTime(),
        id,
    };

    return {
        ...state,
        flyingObjects: [
            ...state.flyingObjects,
            newFlyingObject
        ],
        lastObjectCreatedAt: new Date().getTime(),
    }
    
}