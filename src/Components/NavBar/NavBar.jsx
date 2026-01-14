import { Link, useMatch, useResolvedPath } from 'react-router-dom'
function NavBar(){
    const navBarItems = ['Home', /*'Story',*/ 'Characters', 'About'];
    
    return (
        <div className="navBar-div">
            {
                navBarItems.map((item, index) => (
                    <div key={index} className='navBar-item'>
                        <CustomLink to={item}>
                            {item}
                        </CustomLink>
                    </div>)
                )
            }
        </div>
    )
}

export default NavBar;

function CustomLink({to, children}){
    let resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return(
        <Link to={to} className={isActive ? 'active' : ''}>
            {children}
        </Link>
    );
}