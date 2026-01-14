import SocialsBar from "../Socials/SocialsBar";
import NavBar from "../NavBar/NavBar";

function Header(){
    return (
        <div className="header-container">
            <NavBar />
        </div>
    );
}

export default Header;

/**
 * <div className="header">
            <div className='header-left-side'></div>
            <div className="header-title">
                <h1>Header</h1>
            </div>
            <div className="header-socials-container">
                <SocialsBar />
            </div>
        </div>
 */