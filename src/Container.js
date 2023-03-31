//IMPORT COMPONENETS HERE
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Locations from './components/Locations';
import Berries from './components/Berries';
import Pokemon from './components/Pokemon';

function Container() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/Berries" element={<Berries />} />

            </Routes>
        </div>
    )
}

export default Container