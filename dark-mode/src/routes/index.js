import App from './App';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';


// Use something like react-router-dom to manage multiple pages/routes
export const StyleContext = createContext();

const Home = ()=>{
    const[toggle,setToggle]=useState(false);
    return(
        <StyleContext.Provider value={{toggle,setToggle}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>
        </StyleContext.Provider>
    )
}

export default Home;
