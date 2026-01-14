import YoutubeIcon from '../../assets/youtube_icon.svg?react'
import DiscordIcon from '../../assets/discord_icon.svg?react'
import FacebookIcon from '../../assets/facebook_icon.svg?react'
import InstagramIcon from '../../assets/instagram_icon.svg?react'
import WhatsappIcon from '../../assets/whatsapp_icon.svg?react'
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
                    <a href='https://facebook.com/' target="_blank" rel="noopner noreferrer">
                        <FacebookIcon className='svg-icon' onClick={() => SocialClick('facebook')}/>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.2}}>
                    <a href='https://instagram.com/' target="_blank" rel="noopner noreferrer">
                        <InstagramIcon className='svg-icon' onClick={() => SocialClick('instagram')}/>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.2}}>
                    <a href='https://whatsapp.com/' target="_blank" rel="noopner noreferrer">
                        <WhatsappIcon className='svg-icon' onClick={() => SocialClick('whatsapp')}/>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default SocialsBar;