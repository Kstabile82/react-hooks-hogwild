import {useState} from "react";

function HogTile({ hog }) {
    const [isShowingInfo, setIsShowingInfo] = useState(false)
    function handleToggleDetails() {
        setIsShowingInfo(!isShowingInfo);
    }
    return (
    <div onClick={handleToggleDetails}> 
        <h1>{hog.name}</h1>
        <img src= {hog.image} alt= {hog.name}></img>
        {isShowingInfo ? (
            <div>
                <p>greased: {hog.greased.toString()}</p>
                <p>specialty: {hog.specialty}</p>
                <p>weight: {hog.weight}</p>
                <p>medal: {hog["highest medal achieved"]}</p>
            </div>
        ) : null}
    </div>
    );
}
export default HogTile;