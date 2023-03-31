import { useState, useEffect } from "react";
import { getBerries } from '../fetch'
import Berry from "./Berry";

export default function Berries() {
    const [allBerries, setAllBerries] = useState([]);
    const [berry, setBerry] = useState({});
    const [isBerrySelected, setIsBerrySelected] = useState(false);

    useEffect(() => {
        getBerries()
        .then((res) => setAllBerries([...res]))
    }, []);

    function onBerrySelection(event) {
        let berryIndex = event.target.value;
        if(berryIndex > -1) {
            setBerry(allBerries[berryIndex]);
            setIsBerrySelected(true);
        } else {
            setBerry({});
            setIsBerrySelected(false);
        }
    }


    return (
        <div className="berries">
            <h1>Select a Berry</h1>
            <select onChange={onBerrySelection}>
                <option value={-1}></option>
                {allBerries.map((berry, index) => {
                return (<option value={index} key={berry.id}>{berry.title}</option>)
                })}
            </select>

            {isBerrySelected ? 
            <aside>
                <Berry berry={berry}/>
            </aside> 
            : null}

        </div>
    );
};