import { useState, useEffect, useCallback } from 'react' 
import { useSelector, useDispatch } from 'react-redux';
import { moveObject, startGame } from '../redux/slice';

import Canvas from './Canvas';
import { getCanvasPosition } from '../utils/formulas';


const App = () => {

    const angle = useSelector(state => state.angle);
    const gameState = useSelector(state => state.gameState);
    const dispatch = useDispatch();

    const startGameDispatch = useCallback(()=> {
        dispatch(startGame())
    }, [dispatch])

    const [canvasMousePosition, setCanvasMousePosition] = useState({x: 0, y: 0});
    useEffect(() => {
        dispatch(moveObject(canvasMousePosition))
    }, [canvasMousePosition])

    useEffect(() => {
        window.onresize = () => {
            const cnv = document.getElementById('aliens-go-home-canvas');
            cnv.style.width = `${window.innerWidth}px`;
            cnv.style.height = `${window.innerHeight}px`;
        };
        window.onresize();
    })
    

    const trackMouse = (event) => {
        setCanvasMousePosition(getCanvasPosition(event));
    }

    return (
        <Canvas
            angle={angle}
            trackMouse={trackMouse}
            gameState={gameState}
            onStartGame={startGameDispatch}
        />
    )
}

export default App
