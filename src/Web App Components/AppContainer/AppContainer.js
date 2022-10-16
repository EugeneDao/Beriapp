import Chartpage from "../Chartpage/Chartpage"
import NavBar from "../NavBar/NavBar"
import Portfolio from "../Portfolio/Portfolio"

const AppContainer =()=>{
    return(
        <div>
            <NavBar/>
            <Chartpage/>
            <Portfolio/>
        </div>
    )
}

export default AppContainer