import LogoImage from '../../assets/header_logo.png';

function HeaderLogo() {
    return (
        <div className='header-logo-container'>
            <img className='header-logo' src={LogoImage} alt={LogoImage}/>
        </div>
    );
}

export default HeaderLogo;