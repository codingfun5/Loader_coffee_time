import { useEffect, useState } from 'react';

import LoaderPage from './Loader/LoaderPage';
import './App.css';

function App() {
const [stateLoader, setStateLoader] = useState(true);
useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 5000);
    return () => clearTimeout(timer)
}, [])
    return(
       <div>
       { stateLoader && <LoaderPage/> }
       </div>
    ) 
        
        }  
    

export default App;
