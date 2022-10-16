import "./NavBar.css"

const NavBar =()=>{

    return(
        <div>
            <button className="navbar-button report">Report
            </button>

            <button className="navbar-button portfolio" onClick={handleOnClickPortfolio}>Portfolio</button>


                <div className="navbar-dropdown">
                    <button className="nav-bar-button transactions">Transactions</button>
                    <button className="nav-bar-button summary">Summary</button>
                </div>
                
        </div>
    )
}

export default NavBar