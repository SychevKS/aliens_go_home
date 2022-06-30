import React from 'react';
import PropTypes from 'prop-types';

import Cannon from './cannon/Cannon';
import CannonBall from './CannonBall';
import Ground from './Ground';
import Sky from './Sky';
import CurrentScore from './CurrentScore';
import FlyingObject from './flyingObject/FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';


const Canvas = ({mousePosition, angle, trackMouse, gameState, onStartGame, shoot}) => {

    const gameHeight = 1200;
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
    
    const offGame = (
        <g>
            <StartGame onClick={() => onStartGame()} />
            <Title />
        </g>
    )
    const onGame = (
        <g>
            {gameState.flyingObjects.map(flyingObject => (
                <FlyingObject
                    key={flyingObject.id}
                    position={flyingObject.position}
                />
            ))}
        </g>
    )

    const lives = [];
    for (let i = 0; i < gameState.lives; i++) {
        const heartPosition = {
            x: -180 - (i * 70),
            y: 35
        };
        lives.push(<Heart key={i} position={heartPosition}/>);
    }

    return (  
        <svg
            id="aliens-go-home-canvas"
            onMouseMove={trackMouse}
            viewBox={viewBox}
            onClick={shoot}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            
            <Sky />
            <Ground/>
            {gameState.cannonBalls.map(item => (
                <CannonBall
                    key={item.id}
                    position={item.position}
                />
            ))}
            <Cannon angle={angle}/>
            <CurrentScore score={gameState.kills} />
            {gameState.started ? onGame : offGame}
            {lives}
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    onStartGame: PropTypes.func.isRequired,
    shoot: PropTypes.func.isRequired,
}

export default Canvas;