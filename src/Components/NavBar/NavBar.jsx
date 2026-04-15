import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

function NavBar(){
    const navBarItems = ['Home', 'Characters', 'About'];
    const [activeTab, setActiveTab] = useState('Home');
    const location = useLocation();
    let timer;

    function CheckTabUnderline(){
        const currentPage = location.pathname.replaceAll('/', '');

        timer = setTimeout(() => {
            setActiveTab(prevActiveTab => currentPage);
        }, 200) //.2 second delay before moving back to current active page
    }

    return (
        <div className="navBar-div">
            <motion.ul 
                className='tabsContainer'
                onHoverStart={() => clearTimeout(timer)}
                onHoverEnd={() => CheckTabUnderline()}>
                {
                    navBarItems.map((item, index) => (
                            <motion.li 
                                key={index} 
                                className='tab'
                                whileTap={{scale:0.95}}
                                whileHover={() => setActiveTab(item)}>
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
            </motion.ul>
        </div>
    )
}

export default NavBar;