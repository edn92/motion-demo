import {motion} from 'motion/react';
import Tooltip from '@mui/material/Tooltip';

function CharacterMenuItem(props){
    return(
        <div>
            <Tooltip title={props.name} arrow>
                {
                    props.activeID === props.id ? 
                    
                    <motion.button 
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}} 
                        className="active" 
                        onClick={props.onClick}>
                        <img src={props.src} alt={props.name} />
                    </motion.button> : 
                    <motion.button 
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95}}  
                        onClick={props.onClick}>
                        <img src={props.src} alt={props.name} />
                    </motion.button>
                }
            </Tooltip>
        </div>
    );
}

export default CharacterMenuItem;