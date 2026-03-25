import { motion } from 'motion/react';
import { useState } from 'react';
import { Link/*, useMatch, useResolvedPath*/ } from 'react-router-dom'

function NavBar(){
    const navBarItems = ['Home', /*'Story',*/ 'Characters', 'About'];
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <div className="navBar-div">
            <ul className='tabsContainer'>
                {
                    navBarItems.map((item, index) => (
                            <motion.li key={index} className='tab'>
                                <Link to={item} onClick={() => setActiveTab(item)}>
                                    {item}
                                </Link>
                                { activeTab === item ? 
                                    <motion.div 
                                        id='underline'
                                        layoutId='underline'
                                        transition = {{
                                            type: "spring",
                                            visualDuration: 0.2,
                                            bounce: 0.2
                                        }} 
                                        className='tab-underline'
                                    />
                                : null}
                            </motion.li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default NavBar;
/** */

/*function NavBar(){
    const navBarItems = ['Home', /*'Story', 'Characters', 'About'];
    
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
}*/

/*function CustomLink({to, children}){
    let resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return(
        <Link to={to} className={isActive ? 'active' : ''}>
            {children}
        </Link>
    );
} */