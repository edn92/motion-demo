import SocialsBar from "../Socials/SocialsBar";
import ThemeSwitch from "./ThemeSwitch";
function Footer(){
    return (
        <div className="footer-container">
            <ThemeSwitch />
            <div className='footer-middle'>test</div>
            <SocialsBar />
        </div>
    );
}

export default Footer;