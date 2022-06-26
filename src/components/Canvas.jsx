import React from 'react';
import Cannon from './Cannon/Cannon';
import Ground from './Ground';
import Sky from './Sky';

const Canvas = () => {
    const style = {
        border: '1px solid black',
    }
    
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    
    return (  
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none"
            style={style}
            viewBox={viewBox}
        >
            <Sky />
            <Ground/>
            <Cannon/>
        </svg>
  );
};

export default Canvas;