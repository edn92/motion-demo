import { useState } from 'react';
import { motion } from 'motion/react';

import CharacterMenuItem from './CharacterMenuItem';
import CharacterImage from './CharacterImage';
import CharacterInfo from './CharacterInfo';

import splashArt from '../../assets/splash_art.png';
import splashArt1 from '../../assets/splash_art1.png';
import splashArt2 from '../../assets/splash_art2.png';

import cIcon from '../../assets/character_icon.png';
import cIcon1 from '../../assets/character_icon1.png';
import cIcon2 from '../../assets/character_icon2.png';

function CharactersPage(){    
    const testLongString = 'Loremaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    const testLongString1 = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.'
    
    const charData = [
        { id: 0, name: 'abc', info: testLongString, imgSource: splashArt, iconSource: cIcon, alt: 'aalt',},
        { id: 1, name: 'bcd', info: testLongString1, imgSource: splashArt1, iconSource: cIcon1, alt: 'balt'},
        { id: 2, name: 'cde', info: 'cccccc', imgSource: splashArt2, iconSource: cIcon2, alt: 'calt'}
    ];

    const [selectedCharacter, setSelectedCharacter] = useState(0);

    function changeCharacter(selectedID){ 
        if (selectedID !== selectedCharacter) {
            setSelectedCharacter(prevSelectedCharacter => selectedID);
        }   
    }

    return (
        <div className='content-container'>
            <div className='character-page-content-container'>
                <motion.div className='character-menu-container'>
                    {
                        charData.map((item) => 
                            <CharacterMenuItem activeID={selectedCharacter} id={item.id} src={item.iconSource} name={item.name} onClick={() => changeCharacter(item.id)}/>
                        )
                    }
                </motion.div>
                <motion.div className='character-container'>
                    <CharacterImage 
                        id={charData[selectedCharacter].id}
                        imgSrc={charData[selectedCharacter].imgSource} 
                        imgAlt={charData[selectedCharacter].alt}/>
                    <CharacterInfo 
                        name={charData[selectedCharacter].name} 
                        info={charData[selectedCharacter].info}/>
                </motion.div>
            </div>
        </div>
    );
}

export default CharactersPage;

/**
 *    const menuVars = {
        open: {
            width: 250,
            transition: { duration: 0.01 }
        },
        closed: {
            width: 50,
            transition: { duration: 0.01 }
        }
    }

    <motion.div className='navbar navbar-open' 
    variants={menuVars} initial='open' animate={isMenuOpen ? 'open' : 'closed'}>
 * 
 * 
 */

/*
        { id: 3, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 4, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 5, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 6, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 7, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 8, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 9, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 10, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 11, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 12, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 13, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 14, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'},
        { id: 15, name: 'c', info: 'cccccc', imgSource: 'csource', alt: 'calt'}, */