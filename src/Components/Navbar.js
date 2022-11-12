import logo from "../logo192.png"

function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="nav--logo"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">Tushar Pathak</h4>
        </nav>
    )
}

export default Navbar