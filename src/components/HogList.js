import HogTile from "./HogTile";
import Filter from "./Filter";
import hogs from "../porkers_data";
import {useState} from "react"; 

function HogList() {
   const [onlyGreased, setOnlyGreased] = useState(true); 
    //array of hogs, filter for when state is true, render results
   const filteredHogs = hogs.filter((hog) => {
        if (onlyGreased) {
            return hog.greased;
        }
        else {
            return true; 
        }
    })

    function handleUpdateGreasedFilter() {
        setOnlyGreased(!onlyGreased)
    }

   const hogTiles = filteredHogs.map((hog) => {
       return <HogTile key = {hog.name} hog= {hog}/>
    });
    return (
        <div>
            <Filter 
            onlyGreased={onlyGreased}
            onUpdateGreasedFilter={handleUpdateGreasedFilter}
            />
            {hogTiles}
        </div>
    )
}

export default HogList;