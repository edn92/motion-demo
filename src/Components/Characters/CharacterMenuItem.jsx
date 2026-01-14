import {motion} from 'motion/react';

function CharacterMenuItem(props){
    return(
        <div>
            {
                props.activeID === props.id ? 
                <motion.button 
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}} 
                    className="active" 
                    onClick={props.onClick}>
                    {props.name}
                </motion.button> : 
                <motion.button 
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}  
                    onClick={props.onClick}>
                    {props.name}
                </motion.button>
            }
        </div>
    );
}

export default CharacterMenuItem;