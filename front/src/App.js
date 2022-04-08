import { useEffect } from 'react';
import { APIAuthGet } from './services/index'

function App() {
    const fetch = async () => {
        const result = await APIAuthGet()
    }
    useEffect(() => {
        fetch()
    })
    return (
        <div className="App">
            <div>
                <button>Autenticar no mercado livre</button>
                <p>{process.env.REACT_APP_CLIENT_ID}</p>
            </div>
        </div>
    );
}

export default App;
