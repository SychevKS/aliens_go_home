import { useState, useEffect } from 'react' 
import { useSelector, useDispatch } from 'react-redux';
import { moveObject } from '../redux/slice';

import Canvas from './Canvas';
import { getCanvasPosition } from '../utils/formulas';


const App = () => {

    const angle = useSelector(state => state.angle);
    const dispatch = useDispatch();

    const [canvasMousePosition, setCanvasMousePosition] = useState({x: 0, y: 0});
    useEffect(() => {
        dispatch(moveObject(canvasMousePosition))
    }, [canvasMousePosition])
    

    const trackMouse = (event) => {
        setCanvasMousePosition(getCanvasPosition(event));
    }

    return (
        <Canvas
            angle={angle}
            trackMouse={trackMouse}
        />
    )
}

export default App
