import React from "react";
import { useSpring, animated} from "react-spring";

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Website</a>
            {/* How to make the words not appear if there's no website? */}
            <br/>
            <a href={props.repo} target="_blank" rel="noopener noreferrer">Repository</a>
        </animated.div>
    )
}

export default CardInfo;