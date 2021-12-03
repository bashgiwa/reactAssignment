import { Routes, Route } from "react-router-dom";
import Deals from './views/Deals';
import Stores from './views/Stores';
import Games from './views/Games';
import Details from './views/Details';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Deals/>}></Route>
            <Route path='/games' element={<Games/>}></Route>
            <Route path='/stores' element={<Stores/>}></Route>
            <Route path='/details' element={<Details/>}></Route>
        </Routes>
    )
}

export default Main;