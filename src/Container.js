import { Routes, Route } from "react-router-dom"
import HomePage from "./Components/HomePage"
import Locations from "./Components/Locations"
import PokemonSearch from "./Components/PokemonSearch"
import BerriesDrop from "./Components/BerriesDrop"



export default function Container() {
    return (
        <div>

            <Routes>

                <Route path="/" element={<HomePage/>}/>
                <Route path="/berries" element={<BerriesDrop/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/" element={<HomePage/>}/>
                





            </Routes>




            
        </div>
    )
}