import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import SettingIcon from '../../assets/setting_icon.svg?react'
import ThemeSwitch from './ThemeSwitch';

function SettingsMenu(){
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    let menuRef = useRef();

    useEffect(() => {
        let handleClick = (event) => {
            if (!menuRef.current.contains(event.target)){
                setIsOpen(prev => false); //close menu if clicked outside area
            }
        }

        document.addEventListener('mousedown', handleClick);

        return() => {
            document.removeEventListener('mousedown', handleClick);
        }
    })

    //animate styling
    const animateStyle = {
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 5 : 0
    };

    function ChangeVisible(){
        setIsOpen(prevIsOpen => !isOpen);
    }

    function handleSwitch(){
        const dark =!isDark;
        setIsDark(prevIsDark => dark);
        if (dark) {
            document.querySelector('body').setAttribute('data-theme', 'dark');
        } else {
            document.querySelector('body').setAttribute('data-theme', 'light');
        }
    }

    return (
        <div className='header-right-container' ref={menuRef}>
            <motion.div whileTap={{scale: 0.95}}>
                <SettingIcon className='svg-icon' onClick={() => ChangeVisible()}/>
            </motion.div>
            <motion.div 
                className='menu-container'
                initial={{ opacity:0, x: -226 }} //250 - svgsize/2 svgsize is 48 atm
                animate={ animateStyle }
                transition={{ duration: 0.2, ease: 'easeIn' }}>
                    {
                        isOpen ? 
                        <ul>
                            <li>
                                <div>Switch Themes: </div> 
                                <ThemeSwitch theme={isDark} onClick={handleSwitch} />
                            </li>
                        </ul> : null
                    }
            </motion.div>
        </div>
    );
}

export default SettingsMenu;
