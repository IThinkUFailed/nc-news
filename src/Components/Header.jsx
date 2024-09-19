import LoggedInUser from "./LoggedInUser";
import Navbar from "./Navbar";
const Header = () => {

    return (<>
        <a href="/" className="header-link"> <h1 className="header" >NC NEWS</h1></a>
        <Navbar/>
        <LoggedInUser />
        
        </>
        )

}
export default Header