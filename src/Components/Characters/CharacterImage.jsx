import { motion } from "motion/react";
import backgroundImage from '../../assets/image_background.png';

function CharacterImage(props){
    return (
        <div className="character-image-container" >
            <motion.img 
                src={backgroundImage}
                animate={{
                    rotate: 360, 
                    opacity: [0.2, 0.6, 0.2]}
                }
                transition={{
                    rotate: {duration: 120, repeat: Infinity, ease: 'linear'},
                    opacity: {duration: 5, repeat: Infinity, ease: 'linear'}
                }} 
                alt='background-emblem' 
                className='background-emblem'/>
            <motion.img
                key={props.imgSrc}
                src={props.imgSrc} 
                alt={props.imgAlt}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 0.5
                }} 
                className="character-image"/>
        </div>
    );
}

export default CharacterImage;