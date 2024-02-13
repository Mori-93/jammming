import React, {useCallback} from "react";
import "./Track.css";

const Track = (props) => {
    // need to define onAdd
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        }, [props.onAdd, props.track]
    );
    
    //need to define onRemove
    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        }, [props.onRemove, props.track]
    );
    
    //need to define isRemoval and removeTrack/addTrack
    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onclick={removeTrack}>
                    -
                </button>
            );
        }   return (
                <button className="Track-action" onclick={addTrack}>
                    +
                </button>
        );
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;