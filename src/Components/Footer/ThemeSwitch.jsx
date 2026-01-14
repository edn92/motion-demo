import { motion } from "motion/react";
import { useState } from "react";
import LightModeIcon from '../../assets/light_mode_icon.svg?react';
import DarkModeIcon from '../../assets/dark_mode_icon.svg?react';

function ThemeSwitch(){
    const [isDark, setIsDark] = useState(true);

    function handleSwitch(){
        setIsDark(!isDark);

        if (isDark) {
            document.querySelector('body').setAttribute('data-theme', 'dark');
        } else {
            document.querySelector('body').setAttribute('data-theme', 'light');
        }
    }

    return (
        <div className="theme-switch-container">
            <button
                className="toggle-container"
                style={{
                    justifyContent: "flex-" + (isDark ? "start" : "end"),
                }}
                onClick={handleSwitch}
            >
                <motion.div
                    className="toggle-handle"
                    //style={handle}
                    layout
                    transition={{
                        type: "spring",
                        visualDuration: 0.2,
                        bounce: 0.2,
                    }}>
                    { isDark ? 
                        <LightModeIcon className='svg-icon' style={iconStyle}/> : 
                        <DarkModeIcon className='svg-icon' style={iconStyle}/>
                    }
                </motion.div>
            </button>
        </div>
    )
}

const iconStyle = {
    width: 24,
    height: 24
}

/*

                    /*width: 120,
                    height: 60,
                    backgroundColor: "rgba(66, 153, 225, 0.2)",
                    borderRadius: 50,
                    cursor: "pointer",
                    display: "flex",
                    padding: 10,

const handle = {
    width: 50,
    height: 50,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
}*/

export default ThemeSwitch;