import {
    createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
    flyingObjectsStarterPositions
  } from '../../utils/constants';
  
export default (gameState) => {
    if (!gameState.started) return gameState; // игра не запущена

    const { lastObjectCreatedAt, flyingObjects } = gameState;
  
    const createNewObject = (
        (new Date()).getTime() - lastObjectCreatedAt > createInterval &&
        flyingObjects.length < maxFlyingObjects
    );

    if (!createNewObject) return gameState; // нет нужды создавать новые объекты в данный момент

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
        ...gameState,
        flyingObjects: [
            ...gameState.flyingObjects,
            newFlyingObject
        ],
        lastObjectCreatedAt: new Date().getTime(),
    }
    
}