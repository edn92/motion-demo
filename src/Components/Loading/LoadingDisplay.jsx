import { motion } from "motion/react";

function LoadingDisplay(props){
    const dots = [1, 2, 3];

    const containerVariants = {
        initial: { transition: { staggerChildren: 0.2 }},
        animate: { transition: { staggerChildren: 0.2 }}
    }

    const dotVariants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut'
            }
       }
    };

    return (
        <div className='loading-container'>
            <span>
                {props.message}
            </span>
            <motion.div 
                variants={containerVariants}
                initial='initial'
                animate='animate'  
                className='dots-container'>
            {
                dots.map((item) => (
                    <motion.div key={item} variants={dotVariants} className='loading-dot' />    
                ))
            }
            </motion.div>
        </div>
    )
}

export default LoadingDisplay;