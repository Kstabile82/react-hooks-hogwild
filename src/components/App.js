import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogTile from "./HogTile";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogList/>
			<div className="Hogs">
			</div>
		</div>
	);
}

//hog tiles with click event listener that shows details
//filter menu for greased
//sort menu based on name or weight


//APP 
	//NAV
	//HogList -- use state here
		//FilterSort
  		//hogtiles 
  
export default App;


