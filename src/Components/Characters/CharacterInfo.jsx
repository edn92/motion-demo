import separatorImg from '../../assets/separator1.png';

function CharacterInfo(props){
    return (
        <div className="character-info-container">
            <div className="character-name-div">Name: {props.name}</div>
            <img className='character-info-separator' src={separatorImg} alt={separatorImg}/>
            <div className="scrollable-div">
                {props.info}
                <br/><br/>
                {props.info}
                <br/><br/>
                {props.info}
                <br/><br/>
                {props.info}
                <br/><br/>
                {props.info}
                <br/><br/>
                {props.info}
                <br/><br/>
            </div>
        </div>
    );
}

export default CharacterInfo;