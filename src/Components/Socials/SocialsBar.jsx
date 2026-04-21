import YoutubeIcon from '../../assets/youtube_icon.svg?react';
import DiscordIcon from '../../assets/discord_icon.svg?react';
import ReactIcon from '../../assets/react_icon.svg?react';
import ViteIcon from '../../assets/vite_icon.svg?react';
import { motion } from "motion/react";

function SocialsBar(){
    function SocialClick(social){
        console.log(social);
    }
    
    return (
        <div className='socials-container'>
            <div className='socials-div'>
                <motion.div
                    whileHover={{scale: 1.2}}>
                    <a href='https://youtube.com/' target="_blank" rel="noopner noreferrer">
                        <YoutubeIcon className='svg-icon' onClick={() => SocialClick('youtube')}/>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.2}}>
                    <a href='https://discord.com/' target="_blank" rel="noopner noreferrer">
                        <DiscordIcon className='svg-icon' onClick={() => SocialClick('discord')}/>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.2}}>
                    <a href='https://react.dev/' target="_blank" rel="noopner noreferrer">
                        <ReactIcon className='svg-icon' onClick={() => SocialClick('React')}/>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.2}}>
                    <a href='https://vite.dev/' target="_blank" rel="noopner noreferrer">
                        <ViteIcon className='svg-icon' onClick={() => SocialClick('Vite')}/>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default SocialsBar;