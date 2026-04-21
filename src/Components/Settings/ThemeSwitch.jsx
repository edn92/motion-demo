import { motion } from "motion/react";
import { useState } from "react";
import LightModeIcon from '../../assets/light_mode_icon.svg?react';
import DarkModeIcon from '../../assets/dark_mode_icon.svg?react';

function ThemeSwitch(props){
    const isDark = props.theme;

    return (
        <div className="theme-switch-container">
            <button
                className="toggle-container"
                style={{
                    justifyContent: "flex-" + (isDark ? "end" : "start"),
                }}
                onClick={props.onClick}
            >
                <motion.div
                    className="toggle-handle"
                    layout
                    transition={{
                        visualDuration: 0.5
                    }}>
                    { isDark ? 
                        <DarkModeIcon className='svg-icon' style={iconStyle}/> : 
                        <LightModeIcon className='svg-icon' style={iconStyle}/> 
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

export default ThemeSwitch;