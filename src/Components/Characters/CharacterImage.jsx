import { motion } from "motion/react";

function CharacterImage(props){
    return (
        <div className="character-image-container" >
            <motion.img
                key={props.imgSrc}
                src={props.imgSrc} 
                alt={props.imgAlt}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 0.5
                }} />
        </div>
    );
}

export default CharacterImage;
