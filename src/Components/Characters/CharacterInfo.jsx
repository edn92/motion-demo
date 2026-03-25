function CharacterInfo(props){
    return (
        <div className="character-info-container">
            <div className="character-name-div">Name: {props.name}</div>
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