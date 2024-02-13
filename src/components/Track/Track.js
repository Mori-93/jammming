import React, {useCallback} from "react";
import "./Track.css";

const Track = (props) => {

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {/*renderAction()*/}
        </div>
    );
};

export default Track;