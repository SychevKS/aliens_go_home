import { useState, useEffect, useCallback } from 'react' 
import { useSelector, useDispatch } from 'react-redux';
import { moveObject, startGame, shoot } from '../redux/slice';

import Canvas from './Canvas';
import { getCanvasPosition } from '../utils/formulas';


const App = () => {

    const angle = useSelector(state => state.angle);
    const gameState = useSelector(state => state.gameState);
    const dispatch = useDispatch();

    const [canvasMousePosition, setCanvasMousePosition] = useState({x: 0, y: 0});

    
    useEffect(() => {
        console.log('render')
        const interval = setInterval(() => {
            dispatch(moveObject(canvasMousePosition))
        }, 10)
        return () => {
            clearInterval(interval);
        }
    })

    useEffect(() => {
        window.onresize = () => {
            const cnv = document.getElementById('aliens-go-home-canvas');
            cnv.style.width = `${window.innerWidth}px`;
            cnv.style.height = `${window.innerHeight}px`;
        };
        window.onresize();
    })

    const startGameDispatch = useCallback(()=> {
        dispatch(startGame())
    }, [dispatch])

    const shootDispatch = useCallback(()=> {
        dispatch(shoot(canvasMousePosition))
    }, [dispatch, canvasMousePosition])

    const trackMouse = (event) => {
        setCanvasMousePosition(getCanvasPosition(event));
    }

    return (
        <Canvas
            style={{ zIndex: 1}}
            mousePosition={canvasMousePosition}
            angle={angle}
            trackMouse={trackMouse}
            gameState={gameState}
            onStartGame={startGameDispatch}
            shoot={shootDispatch}
            onClick={(event) => event.preventDefault()}
        />
    )
}

export default App
