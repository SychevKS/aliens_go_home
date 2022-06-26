import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function App() {
    
    const message = useSelector(state => state.message)

    return (
        <div className="App">
            <h1>{message}</h1>
        </div>
    )
}

App.propTypes = {
  message: PropTypes.string.isRequired,
}

export default App
