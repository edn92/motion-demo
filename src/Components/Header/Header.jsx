import HeaderLogo from "./HeaderLogo";
import NavBar from "../NavBar/NavBar";
import Settings from "../Settings/SettingsMenu";

function Header(){
    return (
        <div className="header-container">
            <HeaderLogo />
            <NavBar />
            <Settings />
        </div>
    );
}

export default Header;
