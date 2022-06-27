import React from 'react';
import PropTypes from 'prop-types';

import Cannon from './cannon/Cannon';
import CannonBall from './CannonBall';
import Ground from './Ground';
import Sky from './Sky';
import CurrentScore from './CurrentScore';
import FlyingObject from './flyingObject/FlyingObject';



const Canvas = ({angle, trackMouse}) => {

    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    
    return (  
        <svg
            id="aliens-go-home-canvas"
            /* preserveAspectRatio="xMaxYMax none" */
            onMouseMove={trackMouse}
            viewBox={viewBox}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            <Sky />
            <Ground/>
            <Cannon angle={angle}/>
            <CannonBall position={{x: 0, y: -100}}/>
            <CurrentScore score={15} />
            <FlyingObject position={{x: -150, y: -300}}/>
            <FlyingObject position={{x: 150, y: -300}}/>
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
}

export default Canvas;