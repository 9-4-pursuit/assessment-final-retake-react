import React from "react"
import { Route, Routes } from "react-router-dom"
import Welcome from "./Components/Welcome"
import Pokemon from "./Components/Pokemon"
import Locations from "./Components/Locations"
import Berries from "./Components/Berries"
import NotFound from "./Components/NotFound"


function Container() {
   
        return (
            <div>
                <Routes>
                    <Route path='/'element={<Welcome />} />
                    <Route path="/pokemon" element={<Pokemon />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/Berries" element={<Berries />} />
                    <Route path = "*"  element = {<NotFound/>}/>
                </Routes>
            </div>
        )
    }
    
export default Container