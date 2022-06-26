import PropTypes from 'prop-types';
//import { useSelector } from 'react-redux';
import Canvas from './Canvas';

function App() {
    
    //const message = useSelector(state => state.message)

    return (
        <Canvas />
    )
}

App.propTypes = {
  message: PropTypes.string.isRequired,
}

export default App
