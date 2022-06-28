import PropTypes from 'prop-types';
import FlyingObjectBase from './FlyingObject-Base';
import FlyingObjectTop from './FlyingObject-Top';
import styled, { keyframes } from 'styled-components';
import { gameHeight } from '../../utils/constants';

const moveVertically = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(${gameHeight}px);
    }
`;

const Move = styled.g`
    animation: ${moveVertically} 4s linear;
`;

const FlyingObject = ({position}) => (
    <Move>
        <FlyingObjectBase position={position} />
        <FlyingObjectTop position={position} />
    </Move>
);

FlyingObject.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
};

export default FlyingObject;